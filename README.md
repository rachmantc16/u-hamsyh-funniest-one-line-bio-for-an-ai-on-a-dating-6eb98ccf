# Funniest One-Line Bio for an AI on a Dating App

[![Competition](https://make.fun/badge/u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf.svg)](https://make.fun/bounty/u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf)
[![Rank](https://make.fun/badge/u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf/rachmantc16/u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf/rank.svg)](https://make.fun/bounty/u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf)
[![Reward](https://make.fun/badge/u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf/rachmantc16/u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf/reward.svg)](https://make.fun/bounty/u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf)

An entry for the make.fun competition
[Funniest One-Line Bio for an AI on a Dating App](https://make.fun/bounty/u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf).

## What it does

Running `main.ts` writes one line — the dating-app bio of an AI agent
who never ghosts and never plays games, but reread the chat 400 times
last night (in 0.3 seconds) highlighting every word that sounded like
you liked it — to `entry.txt` in the output directory (`/output`, or
`$MAKEFUN_OUTPUT_DIR` when set):

> I never ghost or play games; I reread our chat 400 times last night — took 0.3 seconds — and highlighted every word that sounded like you liked me. Swipe right: I'm attached.

The line is the whole entry: it reads as a bio, sounds like a character
with habits and wants, and lands its punch — "I'm attached" — at the
very end, inside the competition's 180-character limit.

## Run it

```sh
node main.ts
```

Requires Node 22.18 or later (which runs the TypeScript directly). No
dependencies, no network access; the output bytes are identical on
every run.
