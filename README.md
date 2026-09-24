# Bonsai Training Portal — Framework Draft

Prepared by Lodestar Group / Paul Downie · September 24, 2026

## What this is

A staff-facing training and reference app, modeled on the structure you supplied (the
Saint Denis portal), rebuilt for Bonsai's actual scale and menu. It's a self-contained
static site — no server, no database, no build step. Open `index.html` and it runs;
push the whole folder to Netlify and it's live.

Every page carries an EN/ES toggle in the top bar. Dish *names* stay English-only in
both languages, matching the deliberate call already made on the live Bonsai website —
only descriptions, labels, and instructional copy switch.

## What's populated, and from where

| Section | Source |
|---|---|
| Food Guide | Verbatim from `2026-09-23_BON_MENU_Print-A4-Laminated.pdf` — names, both-language descriptions, prices |
| Beverage Guide | Same source |
| Ingredient Notebook | Lodestar-authored — plain-language explainers for every rare/technical term on the menu and in the retail case (cold-smoking, steelhead trout, gilda, piparra, matcha grade, hojicha, sencha, mugicha, Valladolid burrata, balik cut, furikake, caviar de monte, sashimi-grade, etc.) |
| Allergens & Dietary | Built from the printed menu's ingredient lists and its blanket allergen disclaimer, plus the disclosure-script instruction in the Daily Ops SOP list |
| Food Safety & Cold Chain | Tier-1 items from `2026-09-18_BON_SOP_Daily-Operations-Master-List.md` |
| Service Standards | Lodestar-authored from the SOP list, the menu-copy voice notes, and the delivery-scope boundary |
| Deli & Retail Case | `2026-09-23_BON_SHEET_Deli-Fridge-Item-List.md`, verbatim |
| Brand & Story | `2026-09-22_BON_DEBRIEF_Website-Review-Call-Implementation.md` (headline, founders, voice rules) |
| Hours / Location / Team | Printed menu footer + BEO/website debrief |

## What is NOT yet real and must not be treated as final

This is a **framework draft**, not a signed-off operating standard. Three things need
your (or Jair's / Mariana's) sign-off before staff should rely on it:

1. **Food-safety numbers.** The project record explicitly says exact hold-times,
   discard windows, and temperature thresholds are still being written by the kitchen
   against real service data — so I did not invent any. Every card in Food Safety that
   needs a number says so in an orange "pending" box instead of guessing. Do not fill
   those in without the kitchen's numbers; a wrong number here is worse than a blank one.
2. **The allergen matrix.** Built from listed ingredients only, exactly like the
   printed menu's own disclaimer says. It has not been checked against actual current
   recipes or cross-contact risk in the kitchen. Treat it as a first draft to verify,
   not a guarantee.
3. **Spanish beyond the menu itself.** The menu's Spanish is the team's own, transcribed
   verbatim. Everything else in Spanish (Ingredient Notebook, Food Safety, Service
   Standards, Brand & Story) is a Lodestar translation, not written by a native speaker
   on the ground. Route it past Mariana before it's the standard staff read from.

## Adding your photos

Drop images into the `photos/menu/` folder using these exact filenames — the app finds
them automatically, no code changes needed. Anything missing shows a "Photo pending"
placeholder instead of breaking.

```
photos/menu/bonsai-reserve.jpg
photos/menu/steelhead-trout.jpg
photos/menu/jamon-de-salmon.jpg
photos/menu/bonsai-gilda.jpg
photos/menu/marinated-olives.jpg
photos/menu/tsukemono.jpg
photos/menu/bagel-schmear.jpg
photos/menu/abuelo-bagel.jpg
photos/menu/smoked-fish-toast.jpg
photos/menu/smoked-fish-platter.jpg
photos/menu/smoked-burrata.jpg
photos/menu/matcha-chia-pudding.jpg
photos/menu/black-sesame-cookie.jpg
photos/menu/matcha.jpg
photos/menu/matcha-latte.jpg
photos/menu/hojicha.jpg
photos/menu/hojicha-latte.jpg
photos/menu/sencha.jpg
photos/menu/mugicha.jpg
```

Recommended: JPG, roughly 1600px on the long edge, under ~500KB each, so the app stays
fast on a counter iPad over café wifi. Landscape (16:9-ish) crops fit the photo frame best.

The `photos/deli/` and `photos/brand/` folders are there for retail-case shots and any
brand imagery you want to add later — not yet wired into the layout, since the deli
list has no photos referenced in the current draft.

## Deploying to Netlify

This folder is Netlify-ready as-is — `netlify.toml` is already configured.

**Fastest path (no account changes needed):**
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop).
2. Drag the whole `bonsai-training` folder onto the page.
3. Netlify gives you a live URL in seconds. Anyone with the link can open it — no login required.

**For a link you can keep updating (recommended once photos are in):**
1. Push this folder to a GitHub repo.
2. In Netlify: "Add new site" → "Import an existing project" → connect the repo.
3. Every time you push a change (new photos, edited copy), it redeploys automatically.

Say the word and I can push this live via the connected Netlify integration directly
from here once you've reviewed the draft — I held off doing that automatically since
the content still needs your and the kitchen's sign-off first.

## Editing content later

Every word of copy lives in `data.js` — one file, plain JavaScript objects, no build
tooling. Find the relevant section (the file is commented and organized to match the
portal's own categories), edit the English and Spanish strings, save, redeploy. No
developer required for a copy change.

## Suggested next steps, in order

1. Kitchen sign-off on the three food-safety "pending" numbers.
2. Native Spanish pass (Mariana) on Ingredient Notebook / Food Safety / Service Standards / Brand.
3. Drop in photos using the filenames above.
4. Push live via Netlify.
5. Add the live link to the home-screen install flow for Jair, Mariana, and the floor team.
