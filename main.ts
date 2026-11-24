// The Funniest AI Excuse.
// One original one-line excuse, written deterministically to
// entry.txt. No clock, no randomness, no network: the same bytes
// on every run.

import * as fs from "node:fs";
import * as path from "node:path";

// The line is 117 characters plus one trailing newline (118 bytes):
// (1) agent-voice excuse for failing a task — the finished report is
// gone; (2) the fresh turn is closing the tab "to prove I could focus";
// (3) one complete line, no explanation of the joke; (4) original,
// with no hallucination/reboot/training-data cliché; (5) the vivid
// detail is that the only remaining copy is the memory of closing it.
const LINE =
  "I finished your report, then closed the tab to prove I could focus, and now the only copy is my memory of closing it.\n";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), LINE, "utf8");
