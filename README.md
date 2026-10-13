# SPROUT

**Small steps. Real growth.**

SPROUT is a small, local-first milestone tracker that turns progress into a growing pixel-art tree.

It began with a simple idea: useful software does not need unnecessary infrastructure, subscriptions, accounts, or complexity.

Now SPROUT is also a starting point for your own ideas. Use the template, change the tree, personalize the experience, and share what you grow.

## 🌱 Make SPROUT Your Own

**Your project. Your tree. Your direction.**

1. Open the [SPROUT repository](https://github.com/VeraLynnDeGraw/SPROUT).
2. Select **Use this template**, then **Create a new repository**.
3. Choose a name and decide whether your repository should be public or private.
4. Clone your new repository and follow the setup instructions below.
5. Make it yours. Change the name, colors, tree, milestones, interface, or anything else that fits your idea.

Your new repository is independent of the original SPROUT repository. Experiment freely without changing the source project.

### Share What You Grow

We want to see what you create from your own SPROUT tree.

Share your project, show off your customizations, describe what you learned, or suggest an improvement that could benefit others.

Visit [SPROUT Discussions](https://github.com/VeraLynnDeGraw/SPROUT/discussions) to share your work and connect with other builders.

You do not need a polished product, an impressive portfolio, or a business plan. A small experiment is a perfectly good place to begin.

## Purpose

SPROUT helps people record milestones, track progress, and see that progress represented by a growing pixel-art tree.

## Principles

- **Local-first:** milestone data stays in the browser's local storage.
- **User control:** no mandatory account or external service.
- **Understandable before sophisticated:** keep the implementation small and readable.
- **Portable:** use standard web technologies and Node.js.
- **Honest progress:** verify behavior before claiming success.
- **Preservation without lock-in:** keep the project and its data under the user's control.
- **Growth through sharing:** make room for experimentation, learning, and community contributions.

## Features

- Add milestones.
- Edit and delete milestones.
- Track up to 12 milestones.
- Watch the pixel-art tree grow.
- Store milestones locally in the browser.
- Use the application without an account.

Planned features are not guaranteed to exist yet. Check the code and project discussions for current status.

## Requirements

- Node.js 20 or later
- npm

No third-party npm dependencies are required.

## Run the original project

Clone SPROUT:

```bash
git clone https://github.com/VeraLynnDeGraw/SPROUT.git
cd SPROUT
npm ci
npm start
```

Open http://127.0.0.1:8080 in your browser.

The server listens on the local loopback interface by default, so it is intended for use on the same machine.

If port 8080 is already in use, choose another port:

```bash
PORT=8081 npm start
```

Then open http://127.0.0.1:8081.

## Run your own copy

If you created a repository using the SPROUT template, clone **your new repository's URL** instead of the original URL above.

Then run:

```bash
npm ci
npm start
```

## Customize Your Copy

Start with the files that matter most:

- `public/index.html` contains the interface, styling, and browser-side behavior.
- `server.js` serves the application locally.
- `package.json` contains project metadata and commands.
- `docs/PROJECT_BRIEF.md` describes the project's purpose and constraints.

Change the project's name, visual design, pixel-art tree, milestone limit, wording, or behavior. Test your changes before sharing them.

If you change dependencies, update the package manifest and lockfile together.

## Data and privacy

SPROUT stores milestone data in the browser's local storage. Data is associated with that browser and origin.

- No account is required.
- The application does not require a hosted backend or external API.
- Clearing browser data may remove saved milestones.
- Data stored in one browser or origin is not automatically shared with another.

Back up important information before experimenting with changes. Data export is not currently available.

## Contributing

There are two ways to participate:

- **Build your own version:** use the template and customize your independent copy.
- **Improve the shared project:** propose fixes, documentation updates, ideas, or other changes to the original repository.

Read [CONTRIBUTING.md](CONTRIBUTING.md) for a few helpful guidelines. You can also open a discussion to talk through an idea before working on it.

## Project status

SPROUT is an evolving, open-source learning project. Its current features should be considered complete only after they have been tested.

Ideas are welcome. Claims should be backed by working code.

## License

SPROUT is released under the MIT License. See [LICENSE](LICENSE) for details.

## Acknowledgments

SPROUT was developed by Vera Lynn DeGraw with assistance from OpenAI's ChatGPT for brainstorming, implementation, debugging, and refinement.

The project's direction, design decisions, and stewardship remain with its creator.

---

**Start with an idea. Build something real.**
