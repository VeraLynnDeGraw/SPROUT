# SPROUT

**Small steps. Real growth.**

SPROUT is a small, local-first milestone tracker that turns progress into a growing pixel-art tree.

It began with a simple idea: useful software does not need unnecessary infrastructure, subscriptions, accounts, or complexity.

SPROUT is a cloneable source project for people who want to observe, learn from, and independently adapt a small piece of software. Each person can grow their own copy without joining a central service.

## The Idea

Progress does not always arrive as a grand achievement. Sometimes it is a small task completed, a difficult day survived, or a promise kept.

SPROUT gives those moments a place to grow.

As milestones are added, the tree develops. It is a small visual reminder that growth happens one step at a time.

## Features

- Add, edit, and delete milestones.
- Track up to 12 milestones.
- Watch a pixel-art tree grow with progress.
- Store milestones in the browser's `localStorage`.
- Run locally without an account or hosted backend.
- Use a lightweight Node.js server with no third-party runtime dependencies.

## Requirements

- Node.js 20 or newer
- npm

## Run Locally

Clone the repository:

```bash
git clone https://github.com/VeraLynnDeGraw/SPROUT.git
cd SPROUT
```

Install dependencies from the lockfile:

```bash
npm ci
```

Start SPROUT:

```bash
npm start
```

Open the local address:

http://127.0.0.1:8080

To use a different port:

```bash
PORT=8081 npm start
```

The server binds to `127.0.0.1` by default. This limits its listening interface to the local machine. It is not intended to be a public hosting service.

Changing the bind address can expose the server to other devices on reachable networks. Do not change that setting without understanding the consequences.

## Privacy and Data Boundaries

SPROUT is designed to work without accounts, analytics, telemetry, or a central database.

- Milestones are stored in the browser's `localStorage`.
- The application does not intentionally send milestone content to a central service.
- The local server serves the application page.
- Security headers restrict resource loading, page connections, framing, and selected browser capabilities.
- No cloud synchronization or remote account system is required.

These are design choices, not a promise of perfect anonymity or absolute security.

Browser `localStorage` is not encrypted storage. Browser profiles, extensions, operating systems, other software, and hosting or network providers may have their own access and logging behavior. Clearing browser data may erase stored milestones.

A public repository may expose source code, commit history, author information, and repository activity. Review your own environment and repository changes before storing or publishing sensitive information.

See [docs/PRIVACY.md](docs/PRIVACY.md) for more detail.

## A Tree You Can Copy

The repository is available so people can inspect the source and create independent copies.

You do not need to create an account, submit milestones, or participate in a community to use your own copy.

Each clone is a separate project. Milestones stored in your browser are not automatically shared with the original repository or other clones.

You can learn from the implementation, adapt it for your own use, or keep your changes entirely independent. There is no requirement to contribute them back.

SPROUT does not need to become a hosted platform to be useful.

## Project Principles

- **Small by design:** Prefer understandable solutions over unnecessary complexity.
- **Local first:** Keep personal progress under the user's control.
- **Privacy by restraint:** Do not collect information without a clear need.
- **Independent growth:** Let each copy develop on its own.
- **Honest boundaries:** Document limitations instead of promising perfect security.
- **Human authority:** Review consequential changes before implementation or publication.
- **Curiosity without obligation:** People may observe and learn without having to participate.

## Project Policy and Change Review

SPROUT aims to remain understandable, inspectable, and independently reusable.

The project policy describes its intended behavior, data boundaries, network restrictions, and approval process:

- [Project Policy](docs/PROJECT_POLICY.md)
- [Change Review Checklist](docs/PR_CHECKLIST.md)
- [Privacy Boundaries](docs/PRIVACY.md)
- [Contributing Guidelines](CONTRIBUTING.md)

Changes that introduce new data access, external connections, dependencies, or capabilities should be reviewed before implementation.

A proposed change or automated suggestion is not permission to implement unrelated work. Approval to make a change is separate from authorization to publish it.

## Project Status

SPROUT is an evolving learning project. Its current scope is intentionally small.

Ideas for future improvements are not existing features unless they have actually been implemented and verified.


## Contributing

Participation is optional. You can inspect the code, learn from it, or experiment with your own copy.

Contributions may be considered, but acceptance and ongoing support are not guaranteed.

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidance and licensing details.

## Distribution

SPROUT is intended to be cloned and run from source. The npm package metadata marks the package as private, so it is not configured for publication to the npm registry.

## License

SPROUT is distributed under the MIT License. See [LICENSE](LICENSE).

---

**Observe freely. Copy independently. Grow privately.**
