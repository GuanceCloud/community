package main

type Spec struct {
	InstallationId string                `yaml:"installation_id"`
	Organization   string                `yaml:"organization"`
	Teams          map[string]Team       `yaml:"teams"`
	Repositories   map[string]Repository `yaml:"repositories"`
}

type Team struct {
	Description string       `yaml:"description"`
	Members     []TeamMember `yaml:"members"`
}

type TeamMember struct {
	Username string `yaml:"username"`
	Role     string `yaml:"role"`
}

type Repository struct {
	Description       string            `yaml:"description"`
	HomepageURL       string            `yaml:"homepage_url"`
	GitignoreTemplate string            `yaml:"gitignore_template"`
	LicenseTemplate   string            `yaml:"license_template"`
	Private           bool              `yaml:"private"`
	Topics            []string          `yaml:"topics"`
	Teams             map[string]string `yaml:"teams"`
	HasDiscussions    bool              `yaml:"has_discussions"`
	AllowMergeCommit  bool              `yaml:"allow_merge_commit"`
}
