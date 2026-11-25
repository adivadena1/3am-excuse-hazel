import { mkdirSync, writeFileSync } from "node:fs";

// One line, in the hardware wallet's own voice: it refuses to sign a
// transaction at 3 AM, because it has already signed this exact swap
// twice before and watched the regret arrive at sunrise.
const LINE =
  "I've signed this exact 3 AM swap twice before — same coin, same regret at sunrise. My button stays unpressed.";

// The gate only accepts 1–200 characters of non-blank UTF-8 text, so fail
// loudly here instead of shipping an entry the scorer would reject.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-200 characters, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
