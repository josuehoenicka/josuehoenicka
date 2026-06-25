# Resumen

- Git es un sistema de control de versiones **distribuido**: cada clon es un repositorio completo con todo el historial, no un simple checkout contra un servidor central.
- Permite registrar la evolucion del codigo en **commits** (instantaneas inmutables identificadas por un hash SHA), trabajar en paralelo con **ramas** baratas y fusionar cambios sin pisar el trabajo ajeno.
- Es la base de plataformas como GitHub, GitLab y Bitbucket, y el estandar de facto en cualquier proyecto serio (incluido tu portafolio Angular y tus flujos de n8n).

# Destacado

- **Modelo distribuido**: tras un `git clone` tienes el historial completo en local. Puedes commitear, ramificar y consultar el log sin conexion; solo `push`/`fetch`/`pull` hablan con el remoto. No hay un "punto unico de verdad" tecnico, solo por convencion (`origin`).
- **Los tres estados / staging area**: este es el concepto que mas confunde al principio.
  - Working directory (tus archivos editados) -> Staging area / index (`git add`) -> Repositorio (`git commit`).
  - El **staging area** es una zona intermedia que te deja componer un commit a medida: puedes `git add` solo algunos archivos (o incluso trozos con `git add -p`) y dejar el resto fuera. Un commit no es "todo lo que cambie", es "lo que prepare".
- **Commit**: instantanea inmutable del estado *staged*. Cada commit apunta a su(s) padre(s), formando un DAG (grafo dirigido aciclico). El hash se calcula del contenido + metadatos, asi que reescribir historia cambia los hashes.
- **Branching**: una rama es solo un **puntero movil a un commit** (un archivo de 41 bytes con un hash). Por eso crear ramas es instantaneo y barato. `HEAD` apunta a la rama actual.
  ```bash
  git switch -c feature/login   # crear y cambiar (moderno)
  git branch -d feature/login   # borrar ya fusionada
  ```
- **Merge vs Rebase** (la decision clasica):
  - `git merge`: crea un commit de merge que une dos historias. Conserva el historial real, "tal y como paso". Puede ensuciar el log con muchos merges.
  - `git rebase`: reaplica tus commits *encima* de otra base, reescribiendo sus hashes. Historial lineal y limpio, pero **nunca rebases ramas ya compartidas/pusheadas** (cambias hashes que otros ya tienen).
  - Regla practica: rebase para limpiar tu rama local antes de abrir el PR; merge para integrar a la rama principal.
- **`git stash`**: guarda en una pila los cambios sin commitear para limpiar el working directory (p.ej. para cambiar de rama rapido). `git stash pop` los recupera. Ideal cuando te interrumpen a mitad de algo.
- **`git cherry-pick <hash>`**: copia un commit concreto de otra rama a la actual (crea un commit nuevo con otro hash). Util para llevar un fix puntual a una rama de release sin traerte toda la otra rama.
- **`reset` vs `revert`** (deshacer):
  - `git reset` **mueve el puntero** de la rama hacia atras; reescribe historia local.
    - `--soft` (conserva cambios staged), `--mixed` (por defecto, los deja sin stage), `--hard` (los descarta del todo, peligroso).
  - `git revert <hash>`: crea un **commit nuevo** que invierte otro. No borra historia -> es la forma segura de deshacer algo **ya pusheado/compartido**.
- **`.gitignore`**: patrones de archivos que Git ignora (no los versiona). Imprescindible para `node_modules/`, `dist/`, `.env`, `.angular/cache/`. Solo afecta a archivos *no rastreados*: si ya commiteaste algo, hay que `git rm --cached` para sacarlo.
- **Otros del dia a dia**: `git log --oneline --graph`, `git diff`, `git reflog` (tu red de seguridad: registra a donde apunto HEAD aunque "borres" commits), tags para versionar releases, y `git fetch` vs `git pull` (`pull` = `fetch` + `merge`/`rebase`).
- **Estado 2026**: `git switch`/`git restore` ya reemplazan al sobrecargado `git checkout`; rama por defecto `main`; SHA-256 disponible (aunque SHA-1 sigue dominando por compatibilidad); `git maintenance` para repos grandes y partial/sparse checkout para monorepos.

# Mis notas
-
-
-
