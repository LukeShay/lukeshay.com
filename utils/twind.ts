import { IS_BROWSER } from "fresh/runtime.ts";
import { Configuration, setup, tw } from "twind";

export const cn = (...args: unknown[]): string =>
  tw(args.filter(Boolean).join(" "));

export * from "twind";
export const config: Configuration = {
  darkMode: "class",
  mode: "silent",
  theme: {
    colors: {
      slate: {
        50: "#f8fafc",
        100: "#f1f5f9",
        200: "#e2e8f0",
        300: "#cbd5e1",
        400: "#94a3b8",
        500: "#64748b",
        600: "#475569",
        700: "#334155",
        800: "#1e293b",
        900: "#0f172a",
      },
      white: "#ffffff",
    },
  },
};

if (IS_BROWSER) setup(config);
