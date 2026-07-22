# First Order: Engine

An alternative 1–4 player edition of First Order focused on building and funding a persistent operating engine.

## Play locally

```bash
python3 -m http.server 4174 --directory prototype/shopify-board-game-engine
```

Then open [http://localhost:4174](http://localhost:4174).

## Game modes

The opening setup offers three explicit choices:

- **Solo** — play against the Chaos Monkey.
- **Local Multiplayer** — pass-and-play for 2–4 founders on one device.
- **Online Multiplayer** — create or join a live 2–4 founder game.

## Rules

- The first company starts with **$5**; each later company starts with **$1 more**. Every company also has a named Founder and one permanent Founder skill.
- The **Talent Market** contains **Agency**, **Staff**, and **Shopify Tool** cards, plus optional **Chaos Monkey event** cards.
- Agency and Staff cards provide 2–3 skill points and cost **$1 Upkeep each at the start of every turn**.
- Shopify Tool cards provide exactly **one permanent skill** and never require Upkeep.
- At the start of a turn, pay the full Upkeep or discard Agency and Staff cards until the remaining cost is affordable.
- A loan provides **$5 cash** and creates **$8 debt**. Repaying $8 uses a turn.
- Cards form a persistent engine and are **not discarded** when completing Orders or Milestones.
- Five open **Orders and Milestones** are available. Each requires **3–8 total skill points**, split across its listed skills. Higher-skill cards pay a larger Cash premium.
- Reach **20 reputation with no outstanding loans** to win.
- In multiplayer, reaching the goal triggers the final stretch: finish the current round and play one final round. The eligible company with the most reputation wins.

## Play against the Chaos Monkey

A one-player game is a race against market disruption. After every player turn, the Chaos Monkey takes one card from the Talent Market. On a 1-in-5 roll, it removes an open Order or Milestone instead. Removed cards are immediately replaced. Optional Chaos Monkey event cards can be enabled separately.

On Shopify Quick, successful games against the monkey are recorded in `quick.db`. The leaderboard ranks the ten debt-free wins with the **fewest turns**.

## Card inventory

The complete deck list is available as [`card-inventory.csv`](card-inventory.csv), including card types, skill values, Upkeep, Cash rewards, Reputation rewards, and event effects.

## Online play

The Quick deployment uses `/client/quick.js` and `quick.db` subscriptions for live cross-device games. The implementation is plain HTML, CSS, and JavaScript with no build step.
