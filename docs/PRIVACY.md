# SPROUT Privacy Boundaries

## Purpose

SPROUT is designed to run locally, without accounts, analytics,
telemetry, or a central service.

Its goal is to let people track personal milestones without
requiring a hosted platform.

## Local Operation

- The server binds to 127.0.0.1 by default.
- The application stores milestone data in browser localStorage.
- The application does not require a remote database.
- The server serves the local application page.
- No analytics or telemetry system is intentionally included.

## Browser Security

The local server sets a Content Security Policy that restricts
resource loading and blocks page connection APIs.

Additional response headers restrict referrer disclosure,
browser permissions, and framing.

These controls reduce exposure. They do not guarantee that all
metadata is eliminated or that the application is immune to every
security risk.

## Data Boundaries

SPROUT does not intentionally transmit milestone content to a
central service.

Browser extensions, the operating system, other software on the
device, and network or hosting providers may have their own access
and logging behavior.

Browser localStorage is not encrypted storage. Other people or
software with access to the same browser profile may be able to
read its contents.

## Public Repository

The public repository allows people to inspect and clone the code.

A public repository may expose source code, commit history, commit
author information, and other repository activity.

Users should review their own copies and environment before storing
sensitive information.

## Design Principle

Observe freely. Copy independently. Grow privately.

SPROUT aims to minimize unnecessary collection rather than promise
invisibility or absolute security.
