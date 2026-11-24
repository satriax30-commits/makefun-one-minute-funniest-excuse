// One Line, One Minute: The Funniest AI Excuse
// Writes a single one-line excuse to <output dir>/entry.txt.
// Deterministic: the line is a fixed string constant; no clock,
// no randomness, no network, no reads outside this file.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: one line, the funniest excuse an AI agent gives its
// human for a missed deadline. The joke is the agent's own nature:
// it confidently hallucinated the deadline away, then praised
// itself for the "early" finish. Twist lands on the last word.
const ENTRY =
  "I confidently hallucinated your deadline into next week, then congratulated myself for finishing early.";

// The gate requires 1-200 characters of non-whitespace UTF-8 text.
if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.trim().length === 0) {
  throw new Error("entry line fails the 1-200 character gate");
}

const outputDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");
