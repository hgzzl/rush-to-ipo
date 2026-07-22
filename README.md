# First Order: Engine

An alternative 1–4 player edition of First Order focused on building and funding a persistent operating engine.

## Play locally

```bash
python3 -m http.server 4174 --directory prototype/shopify-board-game-engine
```

Then open [http://localhost:4174](http://localhost:4174).

## Rules

- Every company starts with **$10**, a named founder, and one permanent founder skill.
- The talent market contains **Agencies**, **Staffing**, **Shopify tools**, and optional **Chaos Monkey** cards.
- Agencies and staffing provide 2–3 skill points and cost **$1 each at the start of every turn**.
- Shopify tools provide exactly **one permanent skill** and never require upkeep.
- At the start of a turn, pay the full upkeep or discard agencies/staff until the remaining cost is affordable.
- A loan provides **$5 cash** and creates **$8 debt**. Repaying $8 uses a turn.
- Cards form a persistent engine and are **not discarded** when completing orders or milestones.
- Five briefs are available. Each requires **3–8 total skill points**, split across its listed skills.
- Reach **20 reputation with no outstanding loans** to win.
- In multiplayer, reaching the goal triggers the final stretch: finish the current round and play one final round. The eligible company with the most reputation wins.

## Play against the Chaos Monkey

A one-player game is a race against market disruption. After every player turn, the Chaos Monkey takes one talent card from the market. On a 1-in-5 roll, it steals an open brief instead. Removed cards are immediately replaced. Optional Chaos Monkey event cards can be enabled separately.

On Shopify Quick, successful games against the monkey are recorded in `quick.db`. The leaderboard ranks the ten fastest debt-free wins and shows completion time and turn count.

## Online play

The Quick deployment uses `/client/quick.js` and `quick.db` subscriptions for live cross-device games. The implementation is plain HTML, CSS, and JavaScript with no build step.
