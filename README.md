# You Are a Cat

A simple and lovely cat game. It is tap-to-play for young kids, and based on an idea and a drawing by Carolina.

You are a cat. You wake up hungry, drink milk in the kitchen, wander around the house and out into the city. Happy things make the cat purr and earn hearts; loud things make it jump ("MIAAWOW!"). Collect 5 hearts to buy a fish at the fish shop, carry it home, eat it from your bowl, then go back to your cloud bed for a nap.

## Play

Open `you-are-a-cat.html` in a browser, or play the published version:
https://claude.ai/artifact/1z3SQodhS5wFZKTUsx8c7k

## How it's built

- One file: inline SVG drawings, CSS animations and plain JavaScript, no build step and no libraries.
- Sounds are synthesized with the Web Audio API (there's a mute toggle).
- Fonts are Gochi Hand and Patrick Hand from Google Fonts; offline it falls back to Comic Sans or Chalkboard.
- Each scene has a `goal()` that returns the hotspot to highlight and the hint to show, so the glowing target and the hint always agree.

The file holds the page body only (no `<!doctype>` wrapper), because the artifact host adds the document skeleton when it publishes.

## License

GPL-3.0, see [LICENSE](LICENSE).
