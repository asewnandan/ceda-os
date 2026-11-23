# Planning

## Nu
- [ ] **Quickstart: installatie per OS** (Windows / macOS / Linux, via `Tabs`). Wacht op de plugin; structuur kan alvast. Prerequisites staan er (Orca aanbevolen, Claude Code, Git, GitHub-account). Open: levert Orca Git zelf mee, Windows native of WSL aanbevelen, controleert de orchestrator zelf of tools ontbreken
- [ ] **Orca uitzoeken** (aanbevolen IDE, niet verplicht): docs lezen over plugins en workers. Overlapt het met onze orchestrator-agent en met de plugin-first distributie
- [ ] **Intro-pagina**: herschreven rond de orchestrator (Hoe het werkt, Wat zit erin, Eén bron van waarheid, Wat je ermee bouwt). Nog te doen: "Developer Fundamentals" (IDE e.d.) wel of niet in CEDA OS, kaarten linken naar `components/`-pagina's, hoort "Eén bron van waarheid" daar of in WIP
- Stand docs-site: secties heten **Framework** (Introductie, Quickstart) en **WIP**. Layout is notebook op volle breedte, tabs in de sidebar. Light = blauw primair, dark = geel primair (Npuls-palet, `docs/src/app.css`). Open: afgeleide dark-waarden en pay-off ("Onderwijs bewegen." vs "Moving Education.") nog laten goedkeuren; fontlicenties (General Sans, Cooper Light BT). Design-previews staan in `design-preview/` (gitignored)
- Docs-site in 2 secties (Framework en WIP) is gebouwd. Primaire lezer: externe meekijker. Naam WIP is voorlopig
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
