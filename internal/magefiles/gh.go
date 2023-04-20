//go:build mage
// +build mage

package main

import (
	"context"
	"os"
	"strings"

	"github.com/magefile/mage/mg"
	"github.com/magefile/mage/sh"
)

// Manage the GitHub configurations
type GH mg.Namespace

const pulumiFolder = "internal/iac/github"

var osEnv = make(map[string]string)

func init() {
	for _, env := range os.Environ() {
		tokens := strings.SplitN(env, "=", 2)
		osEnv[tokens[0]] = tokens[1]
	}
}

// Apply reconcile GitHub configuration
func (gh GH) Apply(ctx context.Context) error {
	return sh.RunWithV(osEnv, "pulumi", "up", "-y", "-C", pulumiFolder)
}

// Review show changes be triggered
func (gh GH) Review(ctx context.Context) error {
	return sh.RunWithV(osEnv, "pulumi", "preview", "-C", pulumiFolder)
}
