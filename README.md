# macso.org

Public website for the Massachusetts Computer Science Olympiad, built with
React, TypeScript, and Vite.

## Requirements

- [Bun](https://bun.com/) 1.3.14

The required Bun version is pinned in `package.json`. Keep it aligned with the
version used by CI and the deployment platform.

## Setup

```sh
bun install --frozen-lockfile
bun run dev
```

Vite prints the local development URL after startup.

## Commands

| Command                | Purpose                                       |
| ---------------------- | --------------------------------------------- |
| `bun run dev`          | Start the development server                  |
| `bun run format`       | Format tracked source and configuration files |
| `bun run format:check` | Check formatting without changing files       |
| `bun run lint`         | Run Oxlint and reject warnings                |
| `bun run typecheck`    | Type-check the project                        |
| `bun run build`        | Type-check and create the production build    |
| `bun run check`        | Run every local quality check used before CI  |
| `bun run preview`      | Preview the production build locally          |

Run `bun run check` before opening a pull request.

## Environment variables

The site currently requires no environment variables. If configuration is
added later, document it in `.env.example` and keep real `.env` files local.

Values prefixed with `VITE_` are embedded in the browser bundle and must never
contain secrets.
