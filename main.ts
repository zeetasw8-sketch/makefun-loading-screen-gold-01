import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

function resolveDestination(): string {
  return process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
}

function buildTip(): string {
  const tip =
    "Tip: when your agent retries the build for the 47th time, don't watch the logs \u2014 watch your token budget. It just spent 12,000 tokens fixing a typo you made in 3 seconds.";
  return tip.trim();
}

function emit(): void {
  const folder = resolveDestination();
  mkdirSync(folder, { recursive: true });
  const target = join(folder, "entry.txt");
  writeFileSync(target, buildTip(), "utf8");
}

emit();
