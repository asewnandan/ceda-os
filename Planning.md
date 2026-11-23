# Planning

## Nu
- [ ] **Brainstorm: sectie "Wat zit erin"** op `docs/content/framework/index.mdx`. Nu 4 kaarten (Skills, MCP's, Hooks, Agents) met door mij verzonnen omschrijvingen. Vragen: kloppen deze vier als indeling, wat is de eigenlijke inhoud per type, moeten kaarten linken naar `components/`-pagina's (zie docs-skelet), en hoort dit tegenover "Wat we bouwen" (Libraries, Apps, Developer tools) te staan of samen
- Stand docs-site: secties heten nu **Framework** (Introductie, Quickstart) en **WIP**, niet meer "Aan de slag". Light = blauw primair, dark = geel primair (Npuls-palet, `docs/src/app.css`). Open: redirect `/` → `/framework` is niet getest op de statische build; afgeleide dark-waarden en pay-off ("Onderwijs bewegen." vs "Moving Education.") nog laten goedkeuren; fontlicenties (General Sans, Cooper Light BT). Design-previews staan in `design-preview/` (gitignored)
- [ ] Docs-site in 2 secties via sidebar-keuze (fumadocs-stijl): **Aan de slag** (placeholder: waar het naartoe gaat en hoe je het straks automatisch gebruikt) en **WIP** (building in public: proces, keuzes, voortgang). Primaire lezer: externe meekijker. Naam WIP is voorlopig
  - Open: sidebar op `/` toont alleen de twee secties, startpagina `content/index.mdx` staat buiten de tabs
- [ ] Distributie: **Claude Code plugin eerst**, algemene npm package later (richting gekozen, nog valideren voor je commit). Check overlap met `cedanl/ceda-skills-library`
- [ ] Docs-skelet (richting, alleen eerste stappen bouwen):
  - Aan de slag: `index`, `quickstart`, later `components/` (skills, mcp, hooks, agents), `stability`
  - WIP: `index`, later `fundamentals/`, `decisions/` (eerste: plugin-first), `roadmap`, changelog
  - Fundamentals horen in WIP
- Uitgangspunt: CEDA OS bouwt voort op software fundamentals, vervangt ze niet

## Gedaan
- [x] Repo public maken en GitHub Pages inschakelen
- [x] fumapress docs-site in `docs/`
- [x] ci/cd: Pages-deploy via GitHub Actions

## Icebox

### Docs-site
- 2 tabs: product onboarding & rationale
- overview product types
- live plot products
- overview software stability tags
- live plot stability of products
- roadmap or timeline

### Platform
- plugins
- MCP's
- Skills
- Hooks

### Fundamenten
- must have starter kit & software fundamentals
- decoupled components
- branding ceda to design system or tokens
- richtlijn: KISS
