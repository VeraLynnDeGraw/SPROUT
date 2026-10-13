# SPROUT

**Small steps. Real growth.**

SPROUT is a small, local-first milestone tracker built as part of the ORIGO software workshop.

It is a learning project about building useful software without unnecessary infrastructure, subscriptions, accounts, or complexity.

## Purpose

SPROUT helps users record milestones, track progress, and see their progress represented by a growing pixel-art tree.

## Principles

- **Local-first:** milestone data stays in the browser's local storage.
- **User sovereignty:** no mandatory account or external service.
- **Understandable before sophisticated:** keep the implementation small and readable.
- **Portable:** use standard web technologies and Node.js.
- **Honest progress:** verify behavior before claiming success.
- **Preservation without lock-in:** keep the project and its data under the user's control.

## Features

- Add milestones.
- Edit and delete milestones.
- Track up to 12 milestones.
- Watch the pixel-art tree grow.
- Store milestones locally in the browser.
- Use the application without an account.

## Requirements

- Node.js 20 or later
- npm

No third-party npm dependencies are required.

## Run locally

Clone the repository, then enter the project directory:

    git clone https://github.com/VeraLynnDeGraw/SPROUT.git
    cd SPROUT

Start the server:

    npm start

Open this address in your browser:

    http://127.0.0.1:8080

The server listens on the local loopback interface, so it is intended for use on the same machine.

## Data and privacy

SPROUT stores milestone data in the browser's local storage. Data is associated with that browser and origin. Clearing browser data can remove saved milestones.

JSON export is a future goal and is not yet documented as an available feature.

## Project status

The working interface includes milestone management, local persistence, and a pixel-art growth display.

This is an evolving learning project. Features should be considered complete only after they have been tested.

## License

SPROUT is released under the MIT License. See [LICENSE](LICENSE) for details.

## Acknowledgments

SPROUT was developed by Vera Lynn DeGraw with assistance from OpenAI's ChatGPT for brainstorming, implementation, debugging, and refinement.

The project's direction, design decisions, and stewardship remain with its creator.
