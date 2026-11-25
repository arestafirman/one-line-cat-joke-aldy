// Night shift — The One-Line Cat Joke That Lands
// Writes a single one-line cat joke to $OUTPUT_DIR/entry.txt.
// No dependencies, no network, no secrets. Node 22+ (runs TypeScript as-is).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "My cat runs the 3 a.m. zoomies like a night shift: 47 laps, zero pay, and she files a complaint if I move my feet.";

const outputDir = process.env.OUTPUT_DIR ?? "/output";

// Gate: entry must be 1–200 characters (competition gate, RULES.txt),
// a single line with no embedded newline.
if (JOKE.length < 1 || JOKE.length > 200) {
  throw new Error(`joke length ${JOKE.length} is outside the 1–200 character gate`);
}
if (JOKE.includes("\n") || JOKE.includes("\r")) {
  throw new Error("joke must be a single line");
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), JOKE + "\n", "utf8");
