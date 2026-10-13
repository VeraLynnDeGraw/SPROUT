# SPROUT Project Policy

**Status:** Proposed for review

**Scope:** Source code, application behavior, documentation, and maintenance.

## 1. Purpose

SPROUT is a small, cloneable source project for observing, learning
from, and independently adapting a local-first milestone tracker.

It is not a hosted platform, social network, centralized milestone
service, or autonomous ecosystem.

Its purpose is to remain understandable, inspectable, and usable
without requiring an account, a remote service, or a third-party
runtime dependency.

## 2. Core Principles

- **Local-first:** Keep milestone data in the user's browser by default.
- **Transparency:** Document behavior, boundaries, and limitations.
- **Independence:** Allow people to clone and inspect the source.
- **Minimalism:** Prefer the smallest faithful implementation.
- **Stewardship:** Preserve existing behavior unless a change is reviewed.
- **Human authority:** Do not make consequential project decisions autonomously.
- **Honest security:** Explain protections without promising absolute privacy or security.

## 3. Prohibited by Default

The following require explicit review and maintainer authorization:

- Telemetry, analytics, tracking identifiers, or fingerprinting.
- Background reporting, remote logging, or automatic data uploads.
- Remote databases, hosted milestone storage, or automatic synchronization.
- Unnecessary third-party scripts, fonts, assets, or services.
- Automatic publication, releases, repository-setting changes, or Git history rewrites.
- Unrequested collection of personal information.
- New runtime dependencies without documented justification.
- Browser-accessible filesystem or shell execution capabilities.
- Weakening security controls merely to simplify implementation.

These restrictions keep the project inspectable, independent, and predictable.
Convenience alone does not justify expanding its authority or data flows.

## 4. Network Boundaries

The local server must bind to 127.0.0.1 by default.

Binding to 0.0.0.0 or another non-loopback address can expose the server
to other devices on reachable networks. Such exposure must not become
the default without explicit maintainer authorization and clear warnings.

New network requests or external connections require review of:

- Their purpose and necessity.
- What information is transmitted.
- The destination and who controls it.
- Whether the feature works without the connection.
- The privacy and security consequences.

A hyperlink is not automatically a background request. User-initiated
navigation and automatic requests must be evaluated separately.

## 5. Data Boundaries

Milestone data must remain in browser localStorage unless an explicitly
approved and documented change establishes another storage mechanism.

The application must not transmit milestone data to a remote service by default.

Documentation must explain that:

- Browser localStorage is not encrypted storage.
- Browser profiles, extensions, operating systems, and other software may access local data.
- Clearing browser data may erase stored milestones.
- Localhost binding does not control every source of metadata.
- Public repositories can expose source code, commit history, author information, and repository activity.
- Security headers reduce certain risks but do not guarantee complete security or anonymity.

Do not claim that SPROUT collects no metadata anywhere. Describe only
behavior that has actually been inspected and verified.

## 6. Application Integrity

Preserve the existing milestone workflow:

- Add milestones.
- Edit milestones.
- Delete milestones.
- Persist milestones locally.
- Grow the tree according to the milestone count.
- Respect the existing limit of 12 milestones.

Changes to these behaviors require separate review.

Keep the implementation understandable and avoid unnecessary frameworks,
services, and abstractions.

Treat user-provided content as untrusted. Do not introduce dynamic code
execution or weaken the Content Security Policy to bypass implementation problems.

## 7. Exceptions and Approval

An exception must be proposed before implementation.

Every proposal must document:

1. The behavior being changed.
2. Why the change is necessary.
3. What data access, network access, dependency, or authority it introduces.
4. Risks and alternatives considered.
5. How the change will be tested.
6. The maintainer's explicit approval.

Approval of one exception does not authorize unrelated changes.

A generated plan, automated suggestion, or existing tool permission is
not blanket authorization to implement or publish changes.

## 8. Change Workflow

Use this sequence for consequential changes:

1. Inspect the current implementation.
2. Assess behavior and risks.
3. Propose specific changes and explain their purpose.
4. Wait for explicit authorization.
5. Implement only the approved scope.
6. Run relevant checks and inspect the resulting diff.
7. Report results, limitations, and remaining concerns.
8. Wait for separate authorization before publication.

Do not push commits, create releases, change repository visibility,
alter repository settings, or rewrite Git history without explicit
authorization for that action.

## 9. Project Success

SPROUT succeeds when a person can:

- Read and understand the source.
- Run it locally without unnecessary dependencies.
- Inspect its data boundaries.
- Preserve its intended core behavior.
- Clone and adapt it independently.
- Understand its limitations before relying on it.

Growth, engagement metrics, hosted services, and community size are
not required measures of success.

## 10. Guiding Statement

**Observe freely. Copy independently. Grow privately.**
