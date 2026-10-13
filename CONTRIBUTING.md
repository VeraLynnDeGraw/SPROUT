# Contributing to SPROUT

Thank you for taking an interest in SPROUT.

SPROUT is a small, local-first project intended to be observed, understood, and independently reused. Participation is welcome, but it is never required.

You can learn from the source code, experiment with your own clone, or suggest an improvement. You do not need to contribute code or interact publicly to benefit from the project.

## Project Direction

SPROUT aims to remain:

- Small and understandable.
- Local-first and usable without an account.
- Free of unnecessary analytics and telemetry.
- Independent of a central database or hosted service.
- Respectful of personal data and user control.
- Honest about its limitations and security boundaries.

Changes should support these principles rather than add complexity for its own sake.

## Before Making Changes

Create your own clone or fork and work independently.

Install dependencies from the lockfile:

```bash
npm ci
```

Start the application:

```bash
npm start
```

The default local address is:

http://127.0.0.1:8080

## Development Guidelines

Prefer changes that are small, focused, and easy to understand.

When changing the project:

- Preserve existing functionality unless a change is intentional.
- Avoid adding dependencies without a clear reason.
- Do not introduce analytics, telemetry, tracking identifiers, or unnecessary network requests.
- Do not transmit milestone content to an external service.
- Keep personal information, credentials, tokens, and local data out of source control.
- Document meaningful behavior changes and known limitations.
- Avoid claiming a security or privacy guarantee that the implementation cannot support.

If a change introduces external communication, persistence, or new data handling, explain why it is needed and what information it could expose.

## Testing

Before sharing a change, run:

```bash
node --check server.js
git diff --check
```

Also test the application in a browser. Check that milestones can be added, edited, and deleted, and that the tree continues to grow as expected.

For changes involving security headers or browser restrictions, verify both the response headers and the application behavior.

These checks are a starting point, not a complete security audit.

## Contributions Are Optional

You may keep your changes entirely within your own copy.

A public repository does not create an obligation for the original project to accept contributions, provide support, or maintain every derivative.

Suggestions and proposed changes may be considered when appropriate, but they are not promises of acceptance or a particular response time.

There is no contribution sign-off requirement.

## Respectful Participation

Be constructive, explain the reasoning behind changes, and respect differences in implementation.

Keep reports focused on the project. Do not publish someone else's personal information, private milestones, credentials, or other sensitive data.

## License

SPROUT is distributed under the MIT License. By submitting a contribution for inclusion, you agree that it may be distributed under that license.

You retain the rights you already hold to your own work.

---

**Observe freely. Copy independently. Grow privately.**
