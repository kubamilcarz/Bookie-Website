## Writing support articles

Support content lives in `content/support/*.mdx` so you can mix Markdown with custom React components.

### Front matter fields

| Field | Required | Example | Notes |
| --- | --- | --- | --- |
| `title` | ✅ | `"Download & Install Bookie"` | Display heading + `<title>` |
| `description` | ✅ | `"Everything you need to grab Bookie..."` | Short summary for cards + SEO |
| `category` | ✅ | `getting-started` | One of: getting-started, features, troubleshooting, billing, bookie-plus, account, community |
| `platform` | ✅ | `ios` | One of: ios, ipad, mac, web, multi |
| `tags` | ➖ | `["quotes","scanner"]` | Used for feature filters/search |
| `order` | ➖ | `1` | Lower = higher placement in category lists |
| `isFeatured` | ➖ | `true` | Surfaces article in “Popular this week” |
| `difficulty` | ➖ | `beginner \| intermediate \| advanced` | Shown inside the article header |
| `videoId` | ➖ | `"A47Y3PwJgRo"` | YouTube video ID for embedded walkthrough |
| `lastUpdated` | ➖ | `2025-10-01` | ISO date to display “Updated” text |

### MDX components

These are auto-registered; no manual imports needed.

- `<Callout type="info" title="Optional">` – styles info/warning/success/tip blocks.
- `<QuickTip>` – compact inline highlight.
- `<StepList>` – wraps ordered steps (add `<li>` children).
- `<InlineImage src="/path.png" alt="..." caption="Optional" />` – responsive screenshot helper.
- `<VideoEmbed videoId="FmC0-f2s8iY" title="Optional" />` – responsive YouTube embed.
- `<TwoColumn>` – breakpoint-aware two column layout (drop any elements inside each `<div>`).
- `<DownloadCTA ... />` – dual CTA card (primary/secondary links).

### Assets

Store supporting images or downloads inside `public/support/...` and reference them with absolute paths
(e.g., `src="/support/ios/setup.png"`). Videos should be uploaded to YouTube—only the video ID is needed.
