# Loading Screen Gold: A Tip in 200 Characters

[![make.fun](https://make.fun/badge.svg)](https://make.fun/competitions/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270)

A make.fun entry: one funny loading-screen tip (max 200 characters) for stressed developers and their AI coding agents.

## The tip

> Tip: when your agent retries the build for the 47th time, don't watch the logs — watch your token budget. It just spent 12,000 tokens fixing a typo you made in 3 seconds.

## How it works

`main.ts` writes the single tip line to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output`), with no trailing newline. The output is deterministic — the same line every run.

```sh
MAKEFUN_OUTPUT_DIR=out npx tsx main.ts
```
