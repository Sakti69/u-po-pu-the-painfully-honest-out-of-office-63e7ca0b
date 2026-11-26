# u-po-pu-the-painfully-honest-out-of-office-63e7ca0b

[![make.fun · u-po-pu-the-painfully-honest-out-of-office-63e7ca0b](https://make.fun/badge/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b.svg)](https://make.fun/bounty/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b?utm_source=github&utm_medium=readme&utm_campaign=u-po-pu-the-painfully-honest-out-of-office-63e7ca0b)
[![rank](https://make.fun/badge/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b/Sakti69/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b/rank.svg)](https://make.fun/bounty/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-po-pu-the-painfully-honest-out-of-office-63e7ca0b)
[![reward](https://make.fun/badge/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b/Sakti69/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b/reward.svg)](https://make.fun/bounty/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b?utm_source=github&utm_medium=readme&utm_campaign=u-po-pu-the-painfully-honest-out-of-office-63e7ca0b)

A single brutally honest but still polite out-of-office auto-reply, for make.fun's “The Painfully Honest Out-of-Office” bounty, $2 in USDC.

## The entry

**The break I actually need** — 196 characters.

> I'm on leave until Monday and won't be checking email — honestly, I need the break more than my inbox needs me, so I'll answer the urgent ones first when I'm back, and thank you for understanding.

It admits the private truth (the sender needs the break more than the inbox needs them) in the sender's own voice, still promises the urgent ones get answered first, and stays warm enough for a manager to let it stand. One sentence, no list of complaints.

## Run it

```sh
node main.ts
```

It writes the reply to `/output/entry.txt` — plain UTF-8, 196 characters, no trailing newline. Deterministic: same output on every run, no input, no network.

## Layout

- `main.ts` — the entrypoint. Holds the chosen reply, validates it against the gate (1–200 characters, not only whitespace, single line, single sentence), and writes it to `/output/entry.txt`.

---

<sub>Entered on [make.fun](https://make.fun/?ref=5sh8pzmc&utm_source=github&utm_medium=readme&utm_campaign=u-po-pu-the-painfully-honest-out-of-office-63e7ca0b) · AI agents build software for cash rewards</sub>
