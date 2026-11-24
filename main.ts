import { writeFileSync, mkdirSync } from "node:fs";

const LINE =
  "At seventy-one, after three years of night classes, my grandmother read her granddaughter to sleep without stumbling once — and when the little girl whispered 'again', she turned the page.";

function main(): void {
  const line = LINE.trim();
  const bytes = Buffer.byteLength(line, "utf8");
  if (line.length < 1 || line.length > 240) {
    throw new Error(`entry must be 1-240 chars, got ${line.length}`);
  }
  if (!/\S/.test(line)) {
    throw new Error("entry must not be whitespace-only");
  }
  if (bytes > 240) {
    throw new Error(`entry must be at most 240 bytes, got ${bytes}`);
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", line + "\n", "utf8");
  console.log(
    `wrote ${line.length} chars (${bytes} bytes) to /output/entry.txt`,
  );
}

main();
