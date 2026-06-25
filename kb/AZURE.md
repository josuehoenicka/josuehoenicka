# Resumen
- **Microsoft Azure** es la plataforma cloud de Microsoft: el segundo proveedor mas grande del mundo (tras AWS, por delante de Google Cloud).
- Ofrece cientos de servicios bajo demanda: computo, almacenamiento, bases de datos, redes, IA, contenedores y CI/CD, facturados por uso (pay-as-you-go).
- Para un dev web es la alternativa a AWS / GCP / Cloudflare donde desplegar APIs, frontends, funciones serverless y datos sin gestionar servidores fisicos.
- Punto fuerte: integracion natural con el ecosistema Microsoft (Entra ID/Azure AD, .NET, GitHub, VS Code, TypeScript).

# Destacado
- **Modelo de organizacion**: todo cuelga de una jerarquia `Tenant → Subscription → Resource Group → Resource`. El **Resource Group** es la unidad clave: agrupa recursos relacionados y se borra/despliega como un bloque (mentalmente, es como el `package.json` que agrupa todo lo de una app).
- **Regiones y zonas de disponibilidad**: eliges donde vive el recurso (latencia, residencia de datos, redundancia).

- **Servicios clave para un dev web:**
  - **App Service** — PaaS para hostear apps web y APIs (Node, .NET, Python, Java, contenedores). Tu haces `git push` / CI y Azure gestiona el runtime, escalado y certificados HTTPS. Es el equivalente directo a Heroku, AWS Elastic Beanstalk o App Engine.
  - **Azure Functions** — serverless por eventos (HTTP trigger, timer, cola, blob...). Soporta Node/TypeScript de primera. Modelo de consumo: pagas por ejecucion. Equivale a AWS Lambda / Cloudflare Workers (aunque Workers corre en V8 isolates al edge y Functions en un runtime mas tradicional).
  - **Static Web Apps** — hosting optimizado para SPAs (Angular, React, Vue) + API serverless integrada (Functions) + CI/CD desde GitHub Actions auto-configurado. Incluye CDN global, dominios y SSL gratis. Es la jugada natural para desplegar un **portafolio en Angular**: detecta el build de Angular y publica `dist/`. Compite con Vercel, Netlify y Cloudflare Pages.
  - **Blob Storage** — almacenamiento de objetos (imagenes, videos, backups, assets, builds estaticos). Tiene tiers (Hot/Cool/Cold/Archive) segun frecuencia de acceso. Es el equivalente de AWS S3 / Cloudflare R2 / GCS.
  - **Cosmos DB** — base de datos NoSQL distribuida globalmente, multi-modelo. La API mas comoda para un dev JS es la **API for MongoDB** o la **API for NoSQL** (documentos JSON). Escala horizontal y baja latencia multi-region. Equivale a DynamoDB o Firestore, pero con varias APIs (Mongo, Cassandra, Gremlin, Tabla).
  - **Azure DevOps** — suite de CI/CD y gestion: **Repos** (git), **Pipelines** (build/deploy YAML), **Boards** (tickets) y **Artifacts**. Hoy compite con (y se solapa con) GitHub Actions, que Microsoft tambien posee; para proyectos nuevos GitHub Actions suele ser la via mas ligera.

- **Identidad: Microsoft Entra ID** (antes Azure AD) — el sistema de auth/IAM. Gestiona usuarios, roles (RBAC) y login. Para apps web da OAuth2/OIDC y es la base de "Login with Microsoft".
- **Contenedores**: **Azure Container Apps** (serverless sobre contenedores, ideal para microservicios sin pelearte con Kubernetes), **AKS** (Kubernetes gestionado) y **Container Registry (ACR)** para tus imagenes Docker.
- **IA (muy relevante en 2026)**: **Azure AI Foundry** (antes Azure OpenAI Service) da acceso gestionado a modelos GPT/o-series y de terceros con SLA empresarial, redes privadas y cumplimiento. Es la puerta "enterprise" a LLMs dentro de Azure.
- **Infra como codigo**: **Bicep** (DSL nativo, mas limpio que el viejo ARM JSON) y soporte de Terraform/Pulumi. Bicep es a ARM lo que SCSS es a CSS plano: misma salida, sintaxis mas humana.
- **Herramientas de dev**: **Azure CLI** (`az ...`) y la extension de Azure para **VS Code**, que permite desplegar App Service / Functions / Static Web Apps desde el editor sin tocar el portal.

# Mis notas
-
-
-
