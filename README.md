# boilerplate-typescript-package <!-- omit in toc -->

A personal boilerplate for creating standalone typescript packages.

<br />

## Table of contents <!-- omit in toc -->

- [Getting started](#getting-started)
- [Commands](#commands)
- [Releasing](#releasing)

<br />

## Getting started

- Start by adding a `NPM_TOKEN` as a repository secret in your GitHub repository.
- Replace `__name__` in the `package.json` file, with the package name.
- Run `pnpm install`
- Run `pnpm build`

<br />

## Commands

```bash
# Build package, and places files in `dist`
$ pnpm build

# Runs linting
$ pnpm lint
```

<br />

## Releasing

-