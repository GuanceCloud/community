package main

import (
	"fmt"
	"log"
	"os"

	"github.com/hashicorp/go-multierror"
	"github.com/pulumi/pulumi-github/sdk/v5/go/github"
	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"
)

func build(ctx *pulumi.Context, spec Spec) error {
	var mErr error
	teams := make(map[string]*github.Team)
	repositories := make(map[string]*github.Repository)

	log.Println("Applying organization:", os.Getenv("GITHUB_OWNER"))
	provider, err := github.NewProvider(ctx, "github", &github.ProviderArgs{
		Owner: pulumi.String(spec.Organization),
	})
	if err != nil {
		return err
	}

	// Create organization teams and members
	for teamName, teamSpec := range spec.Teams {
		team, err := github.NewTeam(ctx, teamName, &github.TeamArgs{
			Name:        pulumi.String(teamName),
			Description: pulumi.String(teamSpec.Description),
		})
		if err != nil {
			mErr = multierror.Append(mErr, err)
			continue
		}

		teams[teamName] = team

		for _, member := range teamSpec.Members {
			name := fmt.Sprintf("%s/%s", teamName, member.Username)
			_, _ = github.NewTeamMembership(ctx, name, &github.TeamMembershipArgs{
				TeamId:   team.ID(),
				Username: pulumi.String(member.Username),
				Role:     pulumi.String(member.Role),
			}, pulumi.DependsOn([]pulumi.Resource{team}))
		}
	}

	// Create organization repositories
	for repoName, repoSpec := range spec.Repositories {
		visibility := "public"
		if repoSpec.Private {
			visibility = "private"
		}

		repo, err := github.NewRepository(ctx, repoName, &github.RepositoryArgs{
			Name:                     pulumi.String(repoName),
			AllowAutoMerge:           pulumi.Bool(false),
			AllowMergeCommit:         pulumi.Bool(repoSpec.AllowMergeCommit),
			AllowRebaseMerge:         pulumi.Bool(false),
			AllowSquashMerge:         pulumi.Bool(true),
			AllowUpdateBranch:        pulumi.Bool(false),
			Archived:                 pulumi.Bool(false),
			ArchiveOnDestroy:         pulumi.Bool(true),
			Description:              pulumi.String(repoSpec.Description),
			HasDiscussions:           pulumi.Bool(repoSpec.HasDiscussions),
			HasDownloads:             pulumi.Bool(true),
			HasIssues:                pulumi.Bool(true),
			HasProjects:              pulumi.Bool(true),
			HasWiki:                  pulumi.Bool(true),
			HomepageUrl:              pulumi.String(repoSpec.HomepageURL),
			IsTemplate:               pulumi.Bool(false),
			SquashMergeCommitMessage: pulumi.String("BLANK"),
			SquashMergeCommitTitle:   pulumi.String("PR_TITLE"),
			Topics:                   pulumi.ToStringArray(repoSpec.Topics),
			VulnerabilityAlerts:      pulumi.Bool(false),
			Visibility:               pulumi.String(visibility),

			// Additional attributes, we can enable it when necessary
			// AutoInit:                            nil,
			// GitignoreTemplate:                   nil,
			// IgnoreVulnerabilityAlertsDuringRead: nil,
			// LicenseTemplate:                     nil,
			// MergeCommitMessage:                  nil,
			// MergeCommitTitle:                    nil,
			// Pages:                               nil,
			// SecurityAndAnalysis:                 nil,
			// Template:                            nil,
		})
		if err != nil {
			mErr = multierror.Append(mErr, err)
			continue
		}

		repositories[repoName] = repo

		// bind team to repository
		for teamName, permission := range repoSpec.Teams {
			team, ok := teams[teamName]
			if !ok {
				mErr = multierror.Append(mErr, fmt.Errorf("cannot find team %s", teamName))
				continue
			}

			name := fmt.Sprintf("%s/%s", teamName, repoName)
			_, _ = github.NewTeamRepository(ctx, name, &github.TeamRepositoryArgs{
				Repository: repo.ID(),
				TeamId:     team.ID(),
				Permission: pulumi.String(permission),
			}, pulumi.DependsOn([]pulumi.Resource{repo, team}))
		}
	}

	// Bind App to repositories
	var repoIds pulumi.StringArray
	for _, repo := range repositories {
		repoIds = append(repoIds, repo.ID())
	}
	_, _ = github.NewAppInstallationRepositories(
		ctx, spec.InstallationId, &github.AppInstallationRepositoriesArgs{
			InstallationId:       pulumi.String(spec.InstallationId),
			SelectedRepositories: repoIds,
		},
		pulumi.Provider(provider),
	)
	return nil
}
