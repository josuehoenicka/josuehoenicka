# Resumen
- Base de datos **NoSQL documental**: en vez de tablas y filas, guarda **documentos** (JSON por fuera, **BSON** binario por dentro) agrupados en **colecciones**.
- **Schemaless**: cada documento puede tener su propia forma; no necesitas migrar la BBDD entera para añadir un campo.
- Pensada para escalar horizontalmente (sharding) y para datos que mapean naturalmente a objetos de tu app. Es la "M" del stack MEAN/MERN.
- En 2026 lo normal es usarla gestionada con **MongoDB Atlas** (cloud) y, desde el código, con el driver oficial de Node o con **Mongoose** como ODM.

# Destacado
- **Documento = objeto.** Un registro es literalmente un objeto con pares clave-valor, anidamiento y arrays incluidos:
  ```json
  {
    "_id": ObjectId("..."),
    "nombre": "Josue",
    "skills": ["angular", "n8n", "typescript"],
    "contacto": { "email": "...", "wa": "+58..." }
  }
  ```
  - El `_id` es la PK; si no lo pones, Mongo genera un `ObjectId` (12 bytes, incluye timestamp).
- **BSON**: superset binario de JSON que añade tipos que JSON plano no tiene: `Date`, `ObjectId`, `Decimal128`, datos binarios, `Int32/Int64`. Por eso un `Date` vuelve como objeto fecha, no como string.
- **Queries declarativas con operadores `$`** (van como objeto, no como SQL):
  ```js
  db.users.find({ edad: { $gte: 18 }, skills: "angular" })
           .sort({ edad: -1 }).limit(10)
  ```
  - Operadores típicos: `$gt/$gte/$lt`, `$in`, `$or`, `$and`, `$exists`, `$regex`, `$elemMatch` (para arrays de subdocumentos).
- **Aggregation pipeline**: el motor real para analítica y transformaciones. Es un **array de etapas** donde la salida de una alimenta a la siguiente (idéntico mental al encadenado de operadores RxJS / `Array.prototype`):
  ```js
  db.ventas.aggregate([
    { $match: { estado: "pagado" } },           // filtrar (like .filter)
    { $group: { _id: "$cliente", total: { $sum: "$monto" } } }, // agrupar
    { $sort: { total: -1 } },
    { $limit: 5 }
  ])
  ```
  - Etapas clave: `$match`, `$group`, `$project` (remodelar/seleccionar campos), `$sort`, `$limit/$skip`, `$unwind` (desdoblar arrays a documentos), `$lookup` (el "JOIN" hacia otra colección), `$facet`, `$addFields`.
- **Índices**: sin ellos un `find` hace **collection scan** (lento). Soporta single-field, compuestos, `text`, geoespaciales, TTL (auto-expira documentos, ideal para sesiones/tokens) y parciales. Regla de oro: indexa lo que filtras/ordenas, no más.
- **Modelado de relaciones**: dos estrategias, no hay JOIN gratis como en SQL.
  - **Embedding** (anidar): datos que se leen juntos y crecen acotados → rápido, una sola lectura.
  - **Referencing** (guardar `_id` ajeno + `$lookup` o populate): datos compartidos o que crecen sin límite.
- **Transacciones ACID multi-documento**: existen desde 4.0 y están maduras, pero el diseño documental busca minimizar su necesidad (atomicidad natural a nivel de un documento).
- **Ecosistema y novedades 2026**:
  - **Mongoose** (ODM Node): define esquemas/validación/tipos sobre algo que de base no tiene esquema; muy usado con TypeScript.
  - **Atlas** añade **Vector Search** (embeddings para IA/RAG, relevante si conectas un bot con LLMs), **Search** (full-text sobre Lucene) y **Triggers/Functions** serverless.
  - **Change Streams**: te suscribes a cambios en tiempo real (útil para webhooks/automatizaciones tipo n8n).
- **Cuidado con**: índices que faltan, documentos que crecen sin tope (límite de 16 MB por documento), y `$lookup` masivos (es el síntoma de que quizá un modelo relacional encajaba mejor).

# Mis notas
-
-
-
