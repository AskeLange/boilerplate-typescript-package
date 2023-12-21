# boilerplate-typescript-package <!-- omit in toc -->

A personal boilerplate for creating standalone typescript packages.

<br />

## Table of contents <!-- omit in toc -->

- [Getting started](#getting-started)
- [Commands](#commands)
- [Releasing](#releasing)

<br />

## Getting started

Before starting development on the package, there's a few steps that must be completed, for automatic versioning and releases to work:

- Start by adding a `NPM_TOKEN` as a repository secret in your GitHub repository.
- Check the setting "Allow GitHub Actions to create and approve pull requests" in the repository settings under "Actions".
- Replace `__name__` in the `package.json` file, with the package name.

<br />

## Commands

```bash
# Build package, and places files in `dist`
$ pnpm build

# Builds the package, and runs `./dev/index.mjs`
$ pnpm dev

# Runs linting
$ pnpm lint
```

<br />

## Releasing

This boilerplate uses Google's [`release-please`](https://github.com/googleapis/release-please) and [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) for automatic versioning and releases. When merging changes to the `main` branch, an action will run, which will automatically create a pull-request with an updated `CHANGELOG.md` and `package.json` file. The changes in these are based on the commit messages. Examples can be seen below:

`fix(scope): message`: patch version
`feat(scope): message`: minor version
`fix(scope)!: message`, `feat(scope)!: message`: major version

When merging this pull request into main, two action will run in sequence. First an action to create a GitHub release, and next an action to release the package on npm.