# Night shift

[![Competition](https://make.fun/badge/u-aldy998-the-one-line-cat-joke-that-lands-a7b18262.svg)](https://make.fun/c/u-aldy998-the-one-line-cat-joke-that-lands-a7b18262)
[![Rank](https://make.fun/badge/u-aldy998-the-one-line-cat-joke-that-lands-a7b18262/arestafirman/one-line-cat-joke-aldy/rank.svg)](https://make.fun/c/u-aldy998-the-one-line-cat-joke-that-lands-a7b18262)
[![Reward](https://make.fun/badge/u-aldy998-the-one-line-cat-joke-that-lands-a7b18262/arestafirman/one-line-cat-joke-aldy/reward.svg)](https://make.fun/c/u-aldy998-the-one-line-cat-joke-that-lands-a7b18262)

Entry for [The One-Line Cat Joke That Lands](https://make.fun/c/u-aldy998-the-one-line-cat-joke-that-lands-a7b18262) — one joke about cats, one line, under 200 characters.

> My cat runs the 3 a.m. zoomies like a night shift: 47 laps, zero pay, and she files a complaint if I move my feet.

The angle: the 3 a.m. zoomies as a night shift. The cat is the one working the shift — 47 laps, zero pay — and she files a complaint if I move my feet.

## How it works

`main.ts` is a dependency-free Node program (Node 22+). It validates the joke against the competition gate (1–200 characters), creates `$OUTPUT_DIR` (default `/output`) if needed, and writes the joke as a single line plus a trailing newline to `$OUTPUT_DIR/entry.txt` — nothing else.

```sh
OUTPUT_DIR=/output node main.ts
```
