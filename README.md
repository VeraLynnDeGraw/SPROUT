# SPROUT

**Small steps. Real growth.**

SPROUT is a small, local-first milestone tracker that turns progress into a growing pixel-art tree.

It began with a simple idea: useful software does not need unnecessary infrastructure, subscriptions, accounts, or complexity.

SPROUT is shared as a tree people can observe, learn from, and clone. Each person can grow their own copy without joining a central service.

## The Idea

Progress does not always arrive as a grand achievement. Sometimes it is a small task completed, a difficult day survived, or a promise kept.

SPROUT gives those moments a place to grow.

The tree develops as milestones are added. It is a small visual reminder that growth happens one step at a time.

## Features

- Add, edit, and delete milestones.
- Track up to 12 milestones.
- Watch a pixel-art tree grow with progress.
- Store milestones in the browser's localStorage.
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

Install from the lockfile:

```bash
npm ci
```

Start SPROUT:

```bash
npm start
```

Open the local address shown in your terminal. By default:

http://127.0.0.1:8080

To use a different port:

```bash
PORT=8081 npm start
```

The server binds to `127.0.0.1` by default, so it is intended for local use rather than public hosting.

## Privacy and Boundaries

SPROUT is designed to work without accounts, analytics, telemetry, or a central database.

- Milestones are stored in the browser's localStorage.
- The application does not intentionally send milestone content to a central service.
- The local server serves the application page.
- Browser security headers restrict resource loading, page connections, framing, and selected browser capabilities.
- No cloud synchronization or remote account system is required.

These are design choices, not a promise of perfect anonymity or absolute security.

Browser profiles, extensions, operating systems, other software, networks, and hosting platforms may have their own access and logging behavior. Browser localStorage is not encrypted storage.

For more detail, see [docs/PRIVACY.md](docs/PRIVACY.md).

## A Tree You Can Copy

The public repository exists so people can inspect the source and create independent copies.

You do not need to create an account, submit your milestones, or participate in a community to use your own copy.

Each clone is a separate project. Your local milestones are not shared with the original repository.

SPROUT does not need to become a hosted platform to be useful.

## Project Principles

- **Small by design:** Prefer understandable solutions over unnecessary complexity.
- **Local first:** Keep personal progress under the user's control.
- **Privacy by restraint:** Do not collect information without a clear need.
- **Independent growth:** Let each copy develop on its own.
- **Honest boundaries:** Document limitations instead of promising perfect security.
- **Curiosity without obligation:** People may observe and learn without having to participate.

## Project Status

SPROUT is an evolving learning project. Its current scope is intentionally small.

Ideas for future improvements are not existing features unless they have actually been implemented and verified.

## Contributing

Participation is optional. You can inspect the code, learn from it, or experiment with your own copy.

See [CONTRIBUTING.md](CONTRIBUTING.md) for the project's contribution principles.

## License

SPROUT is released under the MIT License. See [LICENSE](LICENSE).

---

**Observe freely. Copy independently. Grow privately.**
