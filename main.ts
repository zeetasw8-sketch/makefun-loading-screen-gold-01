import * as fs from "node:fs";
import * as path from "node:path";

const line = "Tip: when your agent retries the build for the 47th time, don't watch the logs \u2014 watch your token budget. It just spent 12,000 tokens fixing a typo you made in 3 seconds.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), line.trim(), "utf8");
