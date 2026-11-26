// The Painfully Honest Out-of-Office — make.fun competition
// (u-po-pu-the-painfully-honest-out-of-office-63e7ca0b)
//
// The line: one out-of-office auto-reply, a single sentence of at most
// 200 characters, painfully honest and still polite enough that a manager
// would let it stand. The house judge weighs honesty first, then
// politeness, then the turn of phrase.
//
// The line (final pick — v2 of 3):
// "I'm on leave until Monday and won't be checking email — honestly, I
// need the break more than my inbox needs me, so I'll answer the urgent
// ones first when I'm back, and thank you for understanding."
//
// Why this line: it admits the most private truth — the sender needs the
// break more than the inbox needs them — in the sender's own voice, and
// still promises the urgent ones get answered first, so it stays warm and
// professional enough for a manager to let it stand. "I need the break
// more than my inbox needs me" is the quotable turn: one honest sentence,
// no list of complaints.
//
// Revision notes: three variants were written and run. v1 (194 chars)
// admitted the backlog ("my inbox will still be a mountain") and the
// triage rule ("the order things actually matter, not the order they
// arrived") — quotable, but its admission is about the backlog, not the
// sender. v3 (185 chars) admitted the sender will not think about work at
// all and thanked the reader for the time off — warm, but vaguer than v2.
// v2 (196 chars) wins on the judge's first criterion: the most painfully
// honest while staying polite.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I'm on leave until Monday and won't be checking email — honestly, I need the break more than my inbox needs me, so I'll answer the urgent ones first when I'm back, and thank you for understanding.";

// Gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters, not
// only white space, a single sentence.
if (!(LINE.length >= 1 && LINE.length <= 200)) {
  throw new Error(`line length out of range: ${LINE.length}`);
}
if (LINE !== LINE.trim()) {
  throw new Error("no leading/trailing whitespace");
}
if (LINE.includes("\n")) {
  throw new Error("must be a single line");
}
if (LINE.split(".").length - 1 !== 1 || !LINE.endsWith(".")) {
  throw new Error("must be a single sentence");
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), LINE, "utf8");

console.log(
  `wrote ${JSON.stringify(LINE)} (${LINE.length} chars) to ${join(outputDir, "entry.txt")}`,
);
