# Guance Community hack GuideLines

## What is this?

The hack directory contains scripts that are used to build, test, package, and release Guance Community.

This pattern is used by many Kubernetes projects. We use it in Guance Cloud to ensure that the same build and release process is used by all contributors.

## How to use it?

`make` will call the mage step to complete the workflow. Follow commands is supported.

* `gh:review` - Generate the review report to local directory.
* `gh:apply` - Reconcile the GitHub configuration and apply it by our definition.

## References

* [Kubernetes hack GuideLines](https://github.com/kubernetes/kubernetes/tree/v1.26.1/hack)
* [Dagger hack Overview](https://github.com/dagger/dagger/tree/main/hack)
