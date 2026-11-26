import { mkdirSync, writeFileSync } from "node:fs";

// Fortune Cookie Funnies for Engineers — funniest one-line fortune cookie
// message for a software engineer.
const ENTRY =
  "Your future holds a legacy codebase with no comments and one developer who just quit: you.";
const MAX_CHARS = 120;

if (ENTRY.length < 1 || ENTRY.length > MAX_CHARS) {
  throw new Error(`entry must be 1-${MAX_CHARS} chars, got ${ENTRY.length}`);
}
// The gate also rejects whitespace-only text, so check that explicitly.
if (!ENTRY.trim()) {
  throw new Error("entry must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} chars to /output/entry.txt`);
