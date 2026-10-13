# SPROUT Change Review Checklist

Use this checklist before accepting a code or documentation change.
A completed checklist records review; it does not replace maintainer
authorization.

## Purpose and Scope

- [ ] The change serves SPROUT's documented purpose.
- [ ] The change is limited to the requested scope.
- [ ] Existing milestone behavior is preserved unless explicitly approved.
- [ ] The implementation remains understandable and maintainable.
- [ ] The change follows docs/PROJECT_POLICY.md.

## Privacy and Data

- [ ] No telemetry, analytics, fingerprinting, or tracking identifiers
      have been introduced.
- [ ] No milestone data is sent to an external destination.
- [ ] No background reporting, upload, or synchronization has been added.
- [ ] Any new storage behavior is documented and explicitly approved.
- [ ] Any personal information or secret material is excluded from source
      control.
- [ ] Privacy claims match inspected and tested behavior.

## Network and External Resources

- [ ] The server still binds to 127.0.0.1 by default.
- [ ] Any new network request has a documented purpose and destination.
- [ ] External scripts, fonts, assets, and services have been reviewed.
- [ ] User-initiated links are distinguished from automatic requests.
- [ ] No unnecessary network access has been introduced.
- [ ] Any change to network exposure has explicit maintainer approval.

## Security

- [ ] Security headers and the Content Security Policy remain in place.
- [ ] No security control was weakened merely to make a feature work.
- [ ] No dynamic code execution or browser-accessible shell or filesystem
      capability has been introduced.
- [ ] User-provided content is handled safely.
- [ ] Known limitations and meaningful new risks are documented.

## Dependencies and Complexity

- [ ] No unnecessary dependency has been added.
- [ ] Any proposed dependency includes a documented justification.
- [ ] The change is no more complex than necessary.
- [ ] The project can still be inspected and cloned independently.

## Verification

- [ ] Relevant tests or manual checks were performed.
- [ ] The application starts and works locally.
- [ ] Add, edit, delete, persistence, and tree growth still work when
      application behavior has changed.
- [ ] The final diff contains only intended changes.
- [ ] Generated files, backups, secrets, and unrelated edits are excluded.
- [ ] Results and any unverified assumptions are recorded.

## Authorization and Publication

- [ ] Any policy exception was proposed before implementation.
- [ ] The maintainer explicitly approved the implemented scope.
- [ ] No commit was pushed and no release or repository setting was
      changed without separate authorization.
- [ ] Publication is treated as a separate decision.

## Review Record

- Change:
- Reviewer:
- Checks performed:
- Known limitations:
- Policy exception, if any:
- Explicit authorization:
- Publication status:
