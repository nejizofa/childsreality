import { MLSAdapter } from "./adapter";
import { MockMLSAdapter } from "./mock-adapter";

let adapter: MLSAdapter | null = null;

export function getMLSAdapter(): MLSAdapter {
  if (!adapter) {
    const provider = process.env.MLS_PROVIDER || "mock";
    switch (provider) {
      case "mock":
      default:
        adapter = new MockMLSAdapter();
    }
  }
  return adapter;
}

export type { MLSAdapter } from "./adapter";
export * from "./types";
