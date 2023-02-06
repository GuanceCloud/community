package main

import (
	"log"
	"os"

	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"
	"gopkg.in/yaml.v3"
)

const (
	filePath = "../../../iac/github.yaml"
)

func main() {
	stack := Stack{Path: filePath}
	if err := stack.Reconcile(); err != nil {
		log.Fatal(err)
	}
}

// Stack is the Pulumi Stack to manage the GitHub resources
type Stack struct {
	// The local configuration file path
	Path string
}

// Reconcile the stack to expected specification.
func (stack Stack) Reconcile() error {
	// Load spec from disk
	spec, err := stack.loadSpec()
	if err != nil {
		return err
	}

	// execute pulumi
	return pulumi.RunErr(func(ctx *pulumi.Context) error {
		return build(ctx, spec)
	})
}

// loadSpec will load the specification file from disk
func (stack Stack) loadSpec() (Spec, error) {
	spec := Spec{}

	content, err := os.ReadFile(stack.Path)
	if err != nil {
		return spec, err
	}

	err = yaml.Unmarshal(content, &spec)
	if err != nil {
		return spec, err
	}
	return spec, nil
}
