// Funniest One-Line Bio for an AI on a Dating App — a make.fun program/v1 entry.
//
// The whole entry is one line: the dating-app bio of an AI agent who is
// hopelessly, specifically clingy in a way only an AI can be — it never
// ghosts and never plays games, but it reread the whole chat 400 times
// last night, in 0.3 seconds, highlighting the hopeful bits. This
// program writes that line, and nothing else, to the harness output
// file (entry.txt inside the output directory).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The bio line, exactly as entered. One line, first person, an AI with a
// habit and an appetite — not a spec sheet — with the punch at the end.
const LINE =
  "I never ghost or play games; I reread our chat 400 times last night — took 0.3 seconds — and highlighted every word that sounded like you liked me. Swipe right: I'm attached.";

// The grader mounts the output directory at /output and may also name it
// through MAKEFUN_OUTPUT_DIR; honour the variable when it is set.
function outputDir(): string {
  return process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
}

// The competition gate only judges a file of 1 to 180 characters that is
// not blank, on a single line. Check the line against that gate before
// writing anything, so a careless edit to LINE fails loudly here instead
// of silently producing an entry that can never be judged. The file is
// written with no trailing newline, so the file's character count is the
// bio's character count exactly.
function checkLine(line: string): void {
  if (line.trim().length === 0) {
    throw new Error("the bio line is blank");
  }
  if (line.length > 180) {
    throw new Error(`the bio line is ${line.length} characters; the limit is 180`);
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("the bio line must be a single line");
  }
}

function main(): void {
  checkLine(LINE);
  const dir = outputDir();
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "entry.txt"), LINE, "utf8");
}

main();
