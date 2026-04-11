# Portfolio — Content Structure Guide

## Architecture Overview

- **Framework**: Angular 19+ with esbuild, standalone components
- **Deploy**: Firebase Hosting
- **Styling**: SCSS, black/white/grey palette only (no colors except inline code `#d4d4d4`)
- **i18n**: Custom signal-based `I18nService`, 7 languages (`es`, `en`, `pt`, `zh`, `hi`, `ar`, `ru`). Files at `src/app/i18n/*.json`. Languages `zh/hi/ar/ru` fall back to `en` automatically.
- **Routing**: `/` (Home), `/technology` (list), `/technology/project/:slug` (article detail), `/interculturality`, `/kinesthetics` (list), `/kinesthetics/discipline/:slug` (discipline detail)
- **Markdown rendering**: `marked` v17 with custom renderer (`src/app/utils/code-renderer.ts`)
- **CSS encapsulation**: Use `::ng-deep` (Angular) for styling innerHTML. NEVER use `:deep()` (that's Vue).
- **Filters**: Multi-select using `Set<T>` signals. No "clear filters" button — clicking a selected chip deselects it.
- **Navbar**: `RouterLinkActive` for active state (white bg + black text). "About me" is a bold white link (`nav-link--home`), not a button.

## Sections

### Home Page (`/`)

- **Hero**: Greeting + name + CTA button. CTA uses `i18n.t('hero.cta')` and calls `warpTo('contact')` to scroll to contact with animation.
- **Contact**: Social links rendered from `links` array in `contact.ts`. Each link has `name`, `url`, `icon`, `label`. HTML uses `@switch (link.icon)` with SVG icons for each case (`linkedin`, `instagram`, `tiktok`, `youtube`, `github`). Footer with copyright.

### Technology (`/technology`)

- List page: `blog.ts` renders a table of articles from `blog-data.ts`
- Filter chips for areas (multi-select): AI, Blockchain, Cloud, Cybersecurity, Data, DevOps, Electronics, Frontend, Backend, IoT, Mobile, Systems
- Detail page: `article.ts` with split view — left panel (markdown) and right panel (YouTube embed)
- Data source: `src/app/pages/blog/blog-data.ts`

### Kinesthetics (`/kinesthetics`)

- List page: `kinesthetics.ts` renders a table from `kinesthetics-data.ts`
- Filter chips for disciplines (multi-select)
- Detail page: `discipline.ts` with split view — left panel (markdown) and right panel (YouTube embed)
- Data source: `src/app/pages/kinesthetics/kinesthetics-data.ts`

### Interculturality (`/interculturality`)

- Future section. Follow same patterns as Technology and Kinesthetics.

## Left Panel Markdown Rules

The left container in split-view pages (Technology articles & Kinesthetics disciplines) renders markdown content. Follow these rules when adding new entries.

### Title

**Do NOT use `# H1` headings in the markdown.** The component already renders the title from i18n (`technology.articles.<slug>.title` or `kinesthetics.entries.<slug>.title`). Using `# Title` would duplicate it.

### Headings

Use `## H2` as the top-level heading inside the content. Each H2 gets a bottom border automatically via CSS.

Use `### H3` for subsections within an H2 block.

```markdown
## Section title

Paragraph text.

### Subsection

More detail here.
```

### Lists

Use **numbered lists** (`1. 2. 3.`) for:
- Requirements / materials
- Steps to follow (wiring, uploading code, etc.)
- Concepts when order or count matters

Use **bullet lists** (`- item`) for:
- Tips, notes, alternatives
- Sub-items nested under a numbered item

### Concepts / Key Ideas

When a section has multiple concepts (e.g., "Key concepts"), use a **bullet list with bold titles followed directly by the explanation** (no em dash separator):

```markdown
## Key concepts

- **Concept name.** Explanation text that continues on the same line and can be as long as needed.

- **Another concept.** More explanation here.

- **Concept with sub-items.** Introduction text:
   - Sub-item A
   - Sub-item B
```

**Never use ` — ` (em dash) as a separator.** It looks unnatural. Use periods, colons, or commas instead.

### Code Blocks

Always use fenced code blocks with a language identifier. The custom renderer (`code-renderer.ts`) adds:
- **Language label** in top-left corner (e.g., "C++", "Terminal")
- **Copy button** in top-right corner
- **OS tabs** for terminal commands using the `terminal` language with `---mac---`, `---linux---`, `---windows---` delimiters
- **Comment highlighting**: Lines starting with `#` render as italic at 35% opacity

````markdown
```cpp
int led = 13;
void setup() {
  pinMode(led, OUTPUT);
}
```
````

For terminal commands with OS tabs:

````markdown
```terminal
---mac---
# Install something
brew install something
---linux---
# Install something
sudo apt install something
---windows---
# Install something
winget install something
```
````

### Inline Code

Use backticks for function names, variables, values, and terminal commands within text:

```markdown
The function `delay(1000)` pauses for 1 second.
```

Inline code renders with light grey (`#d4d4d4`) on a subtle background. No colors.

### Tables

Use markdown tables for structured data like wiring connections:

```markdown
| Component | Connection |
|---|---|
| LED anode (+) | → 220Ω resistor → Pin 13 |
| LED cathode (−) | → GND rail |
```

### Horizontal Rules

Avoid `---` separators. The H2 bottom border already provides visual separation between sections.

### Content per Language

Each entry must provide content for `es`, `en`, and `pt` at minimum. Other languages (zh, hi, ar, ru) fall back to `en` automatically. Keep content equivalent across languages — same structure, same numbered items.

## Recommended Section Order (Technology)

1. `## What does this project do?` — One paragraph summary.
2. `## Requirements` — Numbered list. Always include software tools first (e.g., "Visual Studio Code with Arduino CLI"), then hardware components.
3. `## Key concepts` — Bullet list with bold titles and dash separator.
4. `## Wiring / Connections` — H3 options if multiple, table for pin mapping.
5. `## Installation` — Terminal commands with OS tabs (`terminal` language block with `---mac---`/`---linux---`/`---windows---`).
6. `## <filename>` — Fenced code block. Use the actual filename as the heading (e.g., `## flashes-led.ino`).
7. `## Experiment` — Suggestions to modify and learn.
8. `## Notes` — Bullet list of tips and gotchas.

## Recommended Section Order (Kinesthetics)

1. `## About this session` — One paragraph summary.
2. `## Discipline` — What the discipline is about, philosophy.
3. `## What is trained` — Numbered list with bold titles.

## i18n Entries

When adding a new article or discipline, also add entries to all 7 i18n files (`es.json`, `en.json`, `pt.json`, `zh.json`, `hi.json`, `ar.json`, `ru.json`):

- **Technology**: `technology.articles.<slug>.title` and `technology.articles.<slug>.desc`
- **Kinesthetics**: `kinesthetics.entries.<slug>.title` and `kinesthetics.entries.<slug>.desc`

The `title` appears in the table listing and as the detail page heading. Keep it short and consistent across all languages (or use the same name if it's a proper noun like "LED Flashes").

## Adding New Content — Checklist

1. Add entry object to the data file (`blog-data.ts` or `kinesthetics-data.ts`) with `es`, `en`, `pt` content at minimum
2. Add i18n entries (`title`, `desc`) to all 7 JSON files
3. Include `youtube` URL for the right panel embed
4. Set `areas`/`techs` or discipline tags for filter chips
5. Set `difficulty` (`easy`, `medium`, `hard`)
6. Use the section order templates above
7. Run `npx ng build` to verify

## Component Architecture

- **Shared utility**: `src/app/utils/code-renderer.ts` — import `configureMarkedRenderer()` in `ngOnInit()` and `handleCodeBlockClick()` for copy/tab functionality via `(click)="onContentClick($event)"` on the innerHTML div
- **Split view**: Both `article.ts` and `discipline.ts` use a left panel (markdown) + right panel (YouTube). The left panel has a back button and title above the rendered content.
- **SCSS**: Both `article.scss` and `discipline.scss` must use `::ng-deep .code-block` for code block styling (header, tabs, panels, copy button, `.code-comment`)
- **Back button**: Text is just "Back" / "Volver" (no "Back to X"), uses `i18n.t('common.back')`
