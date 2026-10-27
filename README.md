# You Are a Cat

A simple and lovely cat game. It is tap-to-play for young kids, and based on an idea and a drawing by Carolina.

You are a cat. You wake up hungry, drink milk in the kitchen, wander around the house and out into the city. Happy things make the cat purr and earn hearts; loud things make it jump ("MIAAWOW!"). Collect 5 hearts to buy a fish at the fish shop, carry it home, eat it from your bowl, then go back to your cloud bed for a nap.

After the fish it gets dark, and a ladder in the bedroom leads up to the roof: count the five stars, meow at the moon and it winks back. In the living room a red laser dot zips around; pounce on it for hearts until it hides under the sofa. Some mornings it rains: the city gets puddles, and an umbrella shop sells a tiny cat umbrella for 2 hearts, so you can splash without getting wet paws.

Hearts also unlock stickers: every few hearts a new crayon sticker pops up (a fish, a cat, a sun, a rainbow and more). When your tummy is full, tap the fridge to see its door, then tap the door to stick the new sticker wherever you like. A shy grey cat sits on the city wall and hides when you come close; share your fish with it and it becomes your friend, follows you everywhere and naps next to you on the cloud bed..

Every nap moves the season on. Day 1 is summer, then comes autumn, with orange leaves falling and a pile of leaves to jump in (crunch!). In winter it snows instead of raining: the cat leaves paw prints when it walks through the city, you can pat paw prints into a patch of fresh snow, and the butterfly becomes a big snowflake. In spring the flowers make the cat sniff… and ACHOO! In the living room there is a little toy piano. Tap it and the cat walks across eight rainbow keys, and each paw plays a note. The music sheet shows a short song in colors; play it and the cat (and its friend) dance.

Every day a delivery box waits by the front door: tap it and the cat jumps in, peeks out, then pops up wearing the box as a hat until bedtime. In the kitchen a cup sits on the edge of the counter; push it with your paw, slowly, slowly… CRASH! It's scary, but so funny.

In the morning, open the dress-up drawer in the bedroom and pick a crown, a top hat, a bow or heart glasses; a mirror shows how you look, and you wear it all day. Bat the ball of yarn across the bedroom floor until it unrolls and the cat ends up tangled like a pink present, then wiggle free. At night it is bath time first: the cat really doesn't want it. Pop all the bubbles, and it jumps out and shakes so the whole screen gets wet.

On sunny days a little bird lands on the kitchen windowsill. The cat chatters "ek-ek-ek" and the bird sings a short tune, which shows up on the piano's music sheet so you can copy it. On day 3, and every five days after, it's your birthday: a cake waits on the sofa, meow to blow out the candles, and everyone gets a party hat (even the golden bunny). Past the city there is a park with a pond and two ducks. Say hello to the ducks and watch the fish jump for hearts; you can't catch them, and sometimes one splashes you.

Carolina's real art hangs in the house: her painting of red flowers in a gold vase is on the bedroom wall, her cupcake painting is in the kitchen by the clock, and her sticker-dot picture is taped to the fridge. Tap one and the cat goes up close to look (that counts as a fun thing for the day). Three stickers come from her sticker-dot picture too: a smiley face with red cheeks, a green caterpillar and a love heart. Her paintings also set the colours: smiling hearts on the wallpaper, a mint rug with white stars, red and orange dots in the kitchen and a yellow floor with red crayon marks.

Everyone who plays gets their own cat. Give it a name (tap one of the ideas or type your own) and the game saves as you play, on that device, so you can come back and continue from the "Who is playing?" screen. Tap your cat's name at the top any time to save, start again from day 1 (it asks first), see the top cats or change cat. You earn points as you play: one for every heart, 3 for each fun thing you do that day (milk, the box hat, the cup, the bath, the moon and so on) and 5 more for every nap. The Top Cats board ranks all the cats on the device by their best score.

## Play

Open `you-are-a-cat.html` in a browser, or play the published version:
https://claude.ai/artifact/1z3SQodhS5wFZKTUsx8c7k

## How it's built

- One file: inline SVG drawings, CSS animations and plain JavaScript, no build step and no libraries.
- Sounds are synthesized with the Web Audio API (there's a mute toggle).
- Fonts are Gochi Hand and Patrick Hand from Google Fonts; offline it falls back to Comic Sans or Chalkboard.
- Carolina's paintings are photos, cropped flat and saved as small JPEGs inside a hidden `<svg>` at the top of the page (`#art-vase`, `#art-cupcake`, `#art-dots`). Scenes show them with `<use>`, so the photos are in the page only once. To add another, add an `<image>` there and an entry in `ART`.
- Each scene has a `goal()` that returns the hotspot to highlight and the hint to show, so the glowing target and the hint always agree.

The file holds the page body only (no `<!doctype>` wrapper), because the artifact host adds the document skeleton when it publishes.

## License

GPL-3.0, see [LICENSE](LICENSE).
