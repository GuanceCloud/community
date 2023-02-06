//go:build mage
// +build mage

package main

import (
	"context"

	"github.com/magefile/mage/mg"
	"github.com/magefile/mage/sh"
)

// Manage the GitHub configurations
type GH mg.Namespace

const pulumiFolder = "internal/iac/github"

// Apply reconcile GitHub configuration
func (gh GH) Apply(ctx context.Context) error {
	return sh.RunV("pulumi", "up", "-y", "-C", pulumiFolder)
}

// Review show changes be triggered
func (gh GH) Review(ctx context.Context) error {
	return sh.RunV("pulumi", "preview", "-C", pulumiFolder)
}
