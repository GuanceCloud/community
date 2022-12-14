# Contribution Guide

<!-- TOC -->

- [How to contribute](#how-to-contribute)
    - [Understand GitHub workflow](#understand-github-workflow)
    - [Your first contribution](#your-first-contribution)
- [Before you open your PR](#before-you-open-your-pr)
    - [Pre Commit](#pre-commit)
        - [Style lint](#style-lint)
        - [Unit test](#unit-test)
    - [Sign the CLA](#sign-the-cla)
- [Get a Code Review](#get-a-code-review)
    - [Bot commands](#bot-commands)
    - [Pull request workflow](#pull-request-workflow)
- [The next contribution](#the-next-contribution)
- [Get your reward](#get-your-reward)

<!-- /TOC -->

## How to contribute

### Understand GitHub workflow

If this is the first contribution to GitHub for you. You should understand the GitHub flow.

GitHub flow is a more contributor-friendly collaboration model. It contains two key points:

1. All branches except the main branch are feature branches, named by the feature;
2. All contributors create a downstream copy of the repository by fork. After modifying the code, submit a Pull Request to the upstream.

See follow documentation for details:

* [GitHub flow by official](https://docs.github.com/cn/get-started/quickstart/github-flow)

### Your first contribution

If you want to contribute. But don't know how to begin? This guide may be helpful for you.

1. Pick the **Good first issue**: 
   1. [Platypus](https://github.com/GuanceCloud/ppl/labels/good%20first%20issue): The Pipeline Processing Language.
2. Comment on the issue to request an assignment.
3. Fork the repository to your own account.
4. Coding and running pre-commit hook for [style lint](#style-lint) and [unit test](#unit-test).
5. Create a [pull request](https://docs.github.com/cn/get-started/quickstart/github-flow#create-a-pull-request) on your fork.

## Before you open your PR

### Sign the CLA

Click the **Sign in with GitHub to agree on** the button to sign the CLA.

### Pre Commit

#### Style Lint

Usually, you can use the default lint tools to check style issues locally or create a pull request, then the pre-commit hooks, including code style check, will be executed automatically.

A consistent style for code, code comments, commit messages and pull requests is very important for an open-source project. We highly recommend you refer to and comply with the following style guides when you put together your pull requests:

- **PR Title**: See [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) for details. 
  - Guance Cloud uses a subset of scopes. Simply follow the:
    - **fix**: a commit of the *type* `fix` patches a bug in your codebase.
    - **feat:** a commit of the *type* `feat` introduces a new feature to the codebase.
    - **chore**: a commit of the *type* `chore` upgrade built toolkit or helpers in your codebase.
    - **docs**: a commit of the *type* `docs` modifies the documentation in your codebase. It will be ignored by CHANGELOG.
    - **ci**: a commit of type* `ci` changes the ci declaration in your codebase. It will be ignored by CHANGELOG.
  
  - For example, `feat: add xxx command`, `fix(conf): correct config URL`
  
- **Coding Style**: Use language-dependent tools, such as `golangci-lint`. See the official documentation for details.

#### Unit Test

See the documentation of each repository for details.

## Get a code review

### Bot Commands

Guance Cloud uses Slash-style Commands to implement ChatOps workflow to make PR automation.

See [Guance Bot Command Help](https://prow.guance.io/command-help) for details. Is sames as CNCF Bot Commands.

### Pull request workflow

If your pull request (PR) is opened, it will be assigned to reviewers within the relevant Teams. Typically each PR requires at least 1 **LGTM** (Looks Good To Me) from reviewers and 1 **Approve** from maintainers.

Here is a simple sequence chart to show how the pull request is merged:

![image](https://user-images.githubusercontent.com/9150374/203908344-d2e9ef6f-0332-4cbb-9248-8c07b0fe052a.png)

If you request a pull request, this workflow will be started:

1. One or more reviewers will receive the event and assignment.
2. If a part of the codebase needs modification, a reviewer will add comments to related code lines. The author should talk about or modify the code the resolve this comment.
3. When all the comment has been resolved. Reviewer comments a `/lgtm` to add the **LGTM** status to this pull request.
4. Some repositories will need `/ok-to-test` command to trigger a long-time execution or expensive integration test case.
5. After that, the maintainer adds`/approve` to add **Approved** status. The repository will be merged.

## The next contribution

* **More pull-request**: Happy hacking, enjoy coding together!
* **Become a reviewer**: See [Guance Cloud Contributor Ladder](https://community.guance.io/contributor-ladder) for details.
* **Discovery more**: [Guance OSS Landscape](https://guance.io) is a great entrance for you.

## Get your Reward

Once Your PR has been merged, you become a Guance Cloud Contributor. Thank you for your contribution! Please fill out the [form](https://community.guance.io/contributor-reward) to get your reward.

---

This guide inspires by many excellent materials. Here is the reference list:

* [PingCap Contribution Guide](https://github.com/pingcap/community/blob/master/contributors/README.md)
* [CNCF Contributor Ladder](https://glossary.cncf.io/contributor-ladder/)
