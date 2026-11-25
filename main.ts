import { mkdirSync, writeFileSync } from "node:fs";

// One line, in the hardware wallet's own voice: it refuses to sign a
// transaction at 3 AM, because it has already signed this exact swap
// twice before and watched the regret arrive at sunrise.
const LINE =
  "I've signed this exact 3 AM swap twice before — same coin, same regret at sunrise. My button stays unpressed.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
