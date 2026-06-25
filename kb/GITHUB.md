# Resumen
- **GitHub** es una plataforma de alojamiento de repositorios **Git** en la nube, propiedad de Microsoft, que añade colaboración, automatización y un montón de capas sociales encima del control de versiones.
- **No confundir Git con GitHub**: Git es la herramienta de control de versiones (corre en tu máquina, funciona sin internet); GitHub es un *servicio* que hospeda repos Git y le pone alrededor Pull Requests, Issues, CI/CD, permisos, releases y una web. Puedes usar Git sin GitHub, y existen alternativas (GitLab, Bitbucket, Gitea).
- Su valor real no es "guardar código", sino el **flujo de colaboración**: proponer cambios revisables (PRs), discutir trabajo (Issues), y disparar automatizaciones (Actions) cuando algo pasa en el repo.
- En 2026 también es una plataforma de IA: **GitHub Copilot** (autocompletado y chat), agentes de codificación y revisión automática de PRs están integrados de serie.

# Destacado

- **Git vs GitHub (la distinción central)**:
  - Git: `commit`, `branch`, `merge`, `rebase`, `push`, `pull` — todo eso es Git, local, agnóstico de plataforma.
  - GitHub: el `remote` al que haces `push`, más la UI de PRs, Issues, Actions, permisos de organización, etc.
  - Mentalmente: Git es la librería; GitHub es la app SaaS construida sobre esa librería.

- **Repositorios (repos)**: la unidad básica. Pueden ser **públicos** o **privados**. Un repo agrupa el historial Git + Issues + PRs + Actions + releases + wiki + settings. El `README.md` es la portada que GitHub renderiza automáticamente.

- **Forks**: copia tuya de un repo ajeno bajo tu cuenta. Es la base del modelo open source: forkeas un proyecto, trabajas en *tu* copia, y luego abres un PR de tu fork hacia el repo original. Distinto de un `clone` (clone es local; fork vive en GitHub).

- **Pull Requests (PRs)**: el corazón de la colaboración. Un PR es la propuesta de fusionar una rama en otra (típicamente `feature/x` → `main`), con:
  - **Diff revisable** línea a línea y comentarios in-line.
  - **Reviews** (approve / request changes / comment) y *required reviewers*.
  - **Status checks**: el PR no se mergea hasta que pasen los checks (tests, lint, build de Actions).
  - Estrategias de merge: **merge commit**, **squash and merge** (colapsa todo en un commit, mi favorito para mantener `main` limpio) y **rebase and merge**.
  - **Draft PRs** para trabajo en progreso que aún no quieres que revisen.

- **Issues**: tickets para bugs, tareas e ideas. Soportan **labels**, **assignees**, **milestones** y referencias cruzadas. Si en un PR escribes `Closes #42`, al mergear se cierra el issue 42 automáticamente. **GitHub Projects** es el tablero kanban que organiza issues y PRs.

- **GitHub Actions (CI/CD)**: el motor de automatización nativo. Defines *workflows* en YAML dentro de `.github/workflows/`. Se disparan por eventos (`push`, `pull_request`, `schedule` con cron, `workflow_dispatch` manual, etc.):
  ```yaml
  name: CI
  on:
    push:
      branches: [main]
    pull_request:
  jobs:
    build:
      runs-on: ubuntu-latest
      steps:
        - uses: actions/checkout@v4
        - uses: actions/setup-node@v4
          with: { node-version: 22 }
        - run: npm ci
        - run: npm test
        - run: npm run build
  ```
  - **Runners**: las máquinas que ejecutan los jobs (hosted por GitHub o self-hosted).
  - **Marketplace de actions**: bloques reutilizables (`actions/checkout`, `actions/setup-node`...) que importas con `uses:`.
  - **Secrets** y *environments* para credenciales (tokens, claves de deploy) sin exponerlas en el YAML.
  - **Matrix builds** para probar contra varias versiones de Node/SO en paralelo.

- **GitHub Pages**: hosting estático gratuito directamente desde un repo. Sirve HTML/CSS/JS desde una rama o desde el output de un build de Actions. Perfecto para portafolios, docs y SPAs. La URL por defecto es `usuario.github.io/repo` (o `usuario.github.io` para el repo especial `usuario.github.io`).

- **Branch protection / rulesets**: reglas sobre ramas como `main`: exigir PR antes de mergear, requerir N aprobaciones, requerir que pasen los checks, prohibir force-push. Evita que se rompa producción "a lo bruto".

- **Releases y tags**: empaquetas una versión (a partir de un tag Git como `v1.2.0`) con notas de cambios y binarios adjuntos. GitHub puede **autogenerar release notes** a partir de los PRs mergeados.

- **Ecosistema 2026**:
  - **GitHub Copilot**: autocompletado, chat, y *agent mode* que hace cambios multi-archivo; revisión automática de PRs.
  - **Codespaces**: entorno de desarrollo completo en la nube (VS Code en el navegador) con un click, definido por *devcontainers*.
  - **Dependabot**: PRs automáticos para actualizar dependencias vulnerables o desactualizadas.
  - **GitHub CLI (`gh`)**: maneja PRs, issues, releases y workflows desde la terminal (`gh pr create`, `gh pr checkout`, `gh run watch`).

# Mis notas
-
-
-
