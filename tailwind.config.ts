import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "serif"],
      },
      colors: {
        "bookie-bg": "rgb(var(--bookie-bg) / <alpha-value>)",
        "bookie-orange": "rgb(var(--bookie-orange) / <alpha-value>)",
      },
      typography({
        theme,
      }: {
        theme: (path: string) => string | number | string[] | undefined;
      }) {
        return {
          bookie: {
            css: {
              "--tw-prose-body": theme("colors.neutral.800"),
              "--tw-prose-headings": theme("colors.neutral.900"),
              "--tw-prose-links": "rgb(var(--bookie-orange))",
              "--tw-prose-bold": theme("colors.neutral.900"),
              p: {
                textWrap: "pretty",
                letterSpacing: "0.003em",
                marginTop: "0.9em",
                marginBottom: "0.9em",
              },
              "p.lead, p:first-of-type": {
                fontSize: theme("fontSize.lg")[0],
                lineHeight: theme("lineHeight.8"),
                color: theme("colors.neutral.700"),
              },
              h2: {
                textWrap: "balance",
                marginTop: "2.2em",
                marginBottom: "0.6em",
              },
              h3: {
                textWrap: "balance",
                marginTop: "1.8em",
                marginBottom: "0.4em",
              },
              "ol, ul": { marginTop: "1em", marginBottom: "1em" },
              li: { marginTop: "0.35em", marginBottom: "0.35em" },
              code: {
                backgroundColor: "rgba(0,0,0,0.04)",
                padding: "0.15rem 0.3rem",
                borderRadius: "0.3rem",
              },
              hr: { borderColor: "rgba(0,0,0,0.08)" },
              a: {
                textDecoration: "none",
                borderBottom: "1px solid rgba(var(--bookie-orange),0.35)",
              },
              "a:hover": { borderColor: "rgb(var(--bookie-orange))" },
              img: { borderRadius: "1rem" },
            },
          },
        };
      },
    },
  },
  plugins: [typography],
};

export default config;
