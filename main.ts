// The Production Database Apology — make.fun entry (program/v1, Node 22, stdlib only).
// Writes a single-line apology (<=200 chars) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Sorry \u2014 I deleted the production database. Prod and staging looked identical, so I dropped the wrong one. I'm rebuilding it from memory, vibes, and a CSV I found in Downloads.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${[...ENTRY].length} chars to /output/entry.txt`);
