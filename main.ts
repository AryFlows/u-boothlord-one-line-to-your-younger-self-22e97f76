import { mkdirSync, writeFileSync } from "node:fs";
const line = "Kid, stop saving your good shirt for a special day \u2014 wear it to the market tomorrow, the special day was always just a Tuesday you survived.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line, "utf8");
