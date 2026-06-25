# Resumen

- PostgreSQL ("Postgres") es una base de datos **relacional** open source (licencia PostgreSQL, tipo BSD/MIT), con más de 35 años de desarrollo y fama de ser la más completa y rigurosa del mundo SQL.
- Guarda los datos en **tablas** con esquema fijo (columnas tipadas) y los relaciona entre sí mediante claves; se consulta con **SQL**.
- Es **ACID** de verdad: las transacciones son atómicas, consistentes, aisladas y duraderas, así que no pierdes ni corrompes datos aunque falle algo a la mitad.
- Va más allá del relacional clásico: trae tipos avanzados como **JSONB** (NoSQL dentro de SQL), arrays, geometría, búsqueda full-text, vectores para IA (`pgvector`) y un sistema de extensiones enorme.
- Es la opción "por defecto" en backend moderno (Supabase, Neon, Render, Railway, RDS/Aurora, etc.) y la que más probablemente esté detrás de tus APIs.

# Destacado

- **Modelo relacional + esquema tipado**: defines tablas y columnas con tipos estrictos (`int`, `text`, `boolean`, `timestamptz`, `numeric`, `uuid`...). A diferencia de Mongo, la forma del dato se valida al insertar. La unidad de diseño es la tabla; las filas son registros.
  ```sql
  CREATE TABLE usuarios (
    id         uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    email      text UNIQUE NOT NULL,
    nombre     text NOT NULL,
    creado_en  timestamptz NOT NULL DEFAULT now()
  );
  ```

- **Claves y relaciones (la "R" de relacional)**:
  - **PRIMARY KEY**: identifica de forma única cada fila.
  - **FOREIGN KEY**: apunta a la PK de otra tabla y garantiza **integridad referencial** (no puedes insertar un pedido de un usuario que no existe). Con `ON DELETE CASCADE` decides qué pasa al borrar el padre.
  - **UNIQUE**, **NOT NULL**, **CHECK**: restricciones que la base hace cumplir por ti, no tu código.

- **JOINs**: cómo combinas tablas relacionadas en una sola consulta. Es el músculo del modelo relacional.
  ```sql
  SELECT u.nombre, p.total
  FROM usuarios u
  JOIN pedidos p ON p.usuario_id = u.id;   -- INNER por defecto
  ```
  - `INNER JOIN`: solo filas que matchean en ambas.
  - `LEFT JOIN`: todas las de la izquierda + lo que matchee de la derecha (resto a `NULL`).
  - `RIGHT`/`FULL`: simétrico / ambos lados.

- **Transacciones ACID**: agrupas varias operaciones en un bloque "todo o nada".
  ```sql
  BEGIN;
    UPDATE cuentas SET saldo = saldo - 100 WHERE id = 1;
    UPDATE cuentas SET saldo = saldo + 100 WHERE id = 2;
  COMMIT;   -- o ROLLBACK si algo falla
  ```
  Postgres usa **MVCC** (Multi-Version Concurrency Control): cada transacción ve una "foto" consistente de los datos, así que los lectores no bloquean a los escritores ni viceversa. Hay **niveles de aislamiento** (`READ COMMITTED` por defecto, `REPEATABLE READ`, `SERIALIZABLE`).

- **JSONB = NoSQL dentro de SQL**: guarda documentos JSON en una columna, indexable y consultable. Te da la flexibilidad de Mongo sin renunciar a las tablas relacionales del resto del esquema.
  ```sql
  CREATE TABLE eventos (id bigserial PRIMARY KEY, payload jsonb);

  SELECT payload->>'tipo' AS tipo            -- ->> devuelve texto
  FROM eventos
  WHERE payload @> '{"estado": "ok"}';        -- @> = "contiene"

  CREATE INDEX idx_payload ON eventos USING GIN (payload);  -- índice para JSONB
  ```
  - `jsonb` (binario, indexable, sin espacios ni claves duplicadas) casi siempre gana a `json` (texto crudo).
  - Operadores clave: `->` (devuelve json), `->>` (devuelve texto), `@>` (contiene), `?` (¿existe la clave?), y el índice **GIN** lo hace rápido.

- **Tipos avanzados**: arrays (`text[]`, `int[]`), `range` (rangos de fechas/números), `uuid`, `inet`/`cidr` (redes), `interval`, enums, y tipos compuestos. También puedes crear los tuyos. Vas mucho más allá del "número/texto/fecha" típico.

- **Índices**: la diferencia entre una query instantánea y una que escanea toda la tabla.
  - **B-tree** (por defecto): igualdad y rangos (`=`, `<`, `>`, `BETWEEN`, `ORDER BY`).
  - **GIN**: para JSONB, arrays y full-text (búsquedas de "contiene").
  - **GiST / SP-GiST / BRIN**: geometría, datos enormes ordenados, etc.
  - Índices **parciales** (`WHERE activo = true`) y **por expresión** (`LOWER(email)`).
  - `EXPLAIN ANALYZE <query>` te muestra el plan real y si está usando tu índice o no.

- **CTEs (Common Table Expressions)**: subconsultas con nombre con `WITH`, para escribir queries legibles por pasos. Pueden ser **recursivas** (árboles, jerarquías, grafos).
  ```sql
  WITH ventas_mes AS (
    SELECT usuario_id, SUM(total) AS total
    FROM pedidos
    WHERE creado_en >= date_trunc('month', now())
    GROUP BY usuario_id
  )
  SELECT u.nombre, v.total
  FROM ventas_mes v JOIN usuarios u ON u.id = v.usuario_id
  ORDER BY v.total DESC;
  ```

- **Funciones, vistas y triggers (lógica en la base)**:
  - Funciones en **PL/pgSQL** (procedimental) o incluso SQL/JS/Python; y funciones de agregación, ventana (`ROW_NUMBER()`, `RANK()` con `OVER (...)`), etc.
  - **Vistas** (`CREATE VIEW`) y **vistas materializadas** (cachean el resultado en disco).
  - **Triggers**: ejecutan una función ante `INSERT`/`UPDATE`/`DELETE` (p. ej. auditar cambios o actualizar `updated_at`).

- **Concurrencia y escritura segura**:
  - `INSERT ... ON CONFLICT (...) DO UPDATE` = **UPSERT** (insertar o actualizar si ya existe).
  - `SELECT ... FOR UPDATE SKIP LOCKED`: el patrón estándar para **colas de trabajo** sobre una tabla sin que dos workers tomen el mismo job.
  - `RETURNING *` te devuelve la fila afectada en el mismo statement (te ahorras un `SELECT` extra).

- **Extensiones (su superpoder)**: `pgcrypto`, `uuid-ossp`, `postgis` (geoespacial líder mundial), **`pgvector`** (embeddings y búsqueda por similitud para RAG/IA, hoy súper relevante), `pg_trgm` (búsqueda difusa), `pg_cron` (cron dentro de la DB). `CREATE EXTENSION nombre;` y listo.

- **LISTEN/NOTIFY**: pub/sub ligero integrado. Una transacción puede emitir un evento (`NOTIFY canal, 'payload'`) y un cliente suscrito reaccionar en tiempo real, sin un broker aparte.

- **Estado 2026**: PostgreSQL **18** (released sept-2025) es la línea estable actual; trae mejoras notables como **async I/O (AIO)** para lecturas, columnas virtuales generadas, `UUIDv7` nativo (ordenable por tiempo, ideal como PK) y mejoras de rendimiento general. El ecosistema serverless (Neon, Supabase) lo ha vuelto la elección por defecto para proyectos nuevos.

# Mis notas
-
-
-
