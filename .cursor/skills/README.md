# Skills del repo (frontend / desarrollo)

Skills versionados en `.cursor/skills/`. Cursor los descubre automáticamente.

## Stack principal (los que pediste)

| Skill / pack | Origen | Qué hace |
|---|---|---|
| **Superpowers** (`brainstorming`, `writing-plans`, `test-driven-development`, …) | [obra/superpowers](https://github.com/obra/superpowers) | Flujo Brainstorm → Spec → Plan → TDD → Review → Finalize |
| **frontend-design** | [anthropics/skills](https://github.com/anthropics/skills) | Sistema de diseño oficial (anti “AI slop”) |
| **context7** + **find-docs** | [upstash/context7](https://github.com/upstash/context7) | Docs actualizadas de librerías (vía MCP) |
| **mem-search** | [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | Buscar memoria entre sesiones (*requiere plugin*) |
| **webapp-testing** | anthropics/skills | Probar la web con Playwright (skill oficial) |
| **playwright-skill** | [lackeyjb/playwright-skill](https://github.com/lackeyjb/playwright-skill) | Automatización E2E / browser |
| **skill-creator** | anthropics/skills | Crear / mejorar skills |
| **planning-with-files** | [OthmanAdi/planning-with-files](https://github.com/OthmanAdi/planning-with-files) | Planes en `task_plan.md` / `findings.md` / `progress.md` |
| **firecrawl-*** | [firecrawl/firecrawl-claude-plugin](https://github.com/firecrawl/firecrawl-claude-plugin) | Scraping / search / crawl / map |

## Complementarios del proyecto

`landing-page`, `responsive-ui`, `web-accessibility`, `web-performance`, `theme-factory`

## Setup externo (no basta con el skill)

### Context7 (MCP)
Ya hay config en `.cursor/mcp.json` y regla en `.cursor/rules/use-context7.mdc`.
En Cursor: Settings → MCP → autorizar **context7** (OAuth).

### Claude Mem (plugin completo)
`mem-search` solo sirve si el worker/plugin está instalado:

```bash
npx claude-mem install
```

### Firecrawl (API key)
```bash
# CLI + auth según su docs; exporta la key
export FIRECRAWL_API_KEY=...
```

### AY Automate
No es un skill drop-in: es la práctica/framework de [ayautomate.com](https://www.ayautomate.com). En Cursor ya tienes el built-in `/automate` para Cursor Automations.

## Superpowers — skills incluidos

`using-superpowers`, `brainstorming`, `writing-plans`, `executing-plans`, `test-driven-development`, `systematic-debugging`, `subagent-driven-development`, `requesting-code-review`, `receiving-code-review`, `verification-before-completion`, `dispatching-parallel-agents`, `using-git-worktrees`, `finishing-a-development-branch`, `writing-skills`
