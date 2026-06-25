# Resumen

- MySQL es una base de datos **relacional (RDBMS)** open source: guarda los datos en tablas con filas y columnas de esquema fijo, y se consulta con **SQL**.
- Es uno de los motores más usados del mundo para apps web (el clásico stack LAMP/LEMP), ideal cuando los datos tienen estructura clara y necesitas integridad y relaciones entre entidades.
- Hoy (2026) la rama estable de referencia es **MySQL 8.x** (la 8.4 LTS y la serie 9.x "Innovation"). Pertenece a Oracle; su fork comunitario **MariaDB** sigue siendo una alternativa muy popular y compatible.

# Destacado

- **SQL declarativo**: describes *qué* quieres, no *cómo* obtenerlo. El optimizador decide el plan de ejecución.
  ```sql
  SELECT u.nombre, COUNT(p.id) AS pedidos
  FROM usuarios u
  LEFT JOIN pedidos p ON p.usuario_id = u.id
  WHERE u.activo = 1
  GROUP BY u.id
  HAVING pedidos > 3
  ORDER BY pedidos DESC;
  ```

- **Esquema fijo**: cada tabla define sus columnas y tipos (`INT`, `VARCHAR`, `DATETIME`, `DECIMAL`, `BOOLEAN`, `JSON`...) por adelantado. A diferencia de Mongo o Redis, no metes campos nuevos al vuelo: hay que hacer una `ALTER TABLE`.

- **Motores de almacenamiento (storage engines)**, algo casi único de MySQL:
  - **InnoDB** es el motor por defecto y el que debes usar casi siempre. Da **transacciones ACID**, **claves foráneas** reales, bloqueo a nivel de fila y recuperación ante caídas (crash recovery).
  - **MyISAM** es el viejo motor: rápido para lectura pura pero sin transacciones ni FKs. Hoy es legacy, no lo elijas para nada nuevo.
  - Otros: `MEMORY` (tablas en RAM), `Archive`, etc.

- **Claves (keys)**:
  - **PRIMARY KEY**: identificador único de la fila. En InnoDB la tabla se organiza físicamente por la PK (índice agrupado / *clustered index*), así que conviene que sea pequeña y secuencial (un `BIGINT AUTO_INCREMENT` típico).
  - **FOREIGN KEY**: garantiza integridad referencial (no puedes apuntar a un usuario que no existe; puedes definir `ON DELETE CASCADE`).
  - **UNIQUE**: impide valores duplicados (ej. un email).

- **Índices**: estructuras (B-tree por defecto) que aceleran las búsquedas a costa de algo de escritura y disco. Sin índice, una consulta hace *full table scan* (recorre toda la tabla).
  - Regla práctica: indexa las columnas que usas en `WHERE`, `JOIN` y `ORDER BY`.
  - **Índices compuestos** siguen la regla del *prefijo izquierdo*: un índice `(a, b)` sirve para filtrar por `a` o por `a, b`, pero no por `b` solo.
  - `EXPLAIN SELECT ...` te muestra el plan y si está usando índice o escaneando todo. Es tu mejor amigo para optimizar.

- **Transacciones**: `START TRANSACTION` ... `COMMIT` / `ROLLBACK`. Todo o nada. Con niveles de aislamiento configurables (`REPEATABLE READ` es el default de InnoDB).

- **Tipo JSON nativo** (desde 5.7, mejorado en 8.x): puedes guardar documentos JSON en una columna y consultarlos con funciones (`JSON_EXTRACT`, operador `->>`). Útil para campos semiestructurados sin irte a NoSQL.

- **Novedades modernas (8.x)**: CTEs (`WITH ... AS`), **window functions** (`ROW_NUMBER() OVER (...)`), índices invisibles, mejor soporte de Unicode (`utf8mb4` como charset recomendado, soporta emojis), y el *data dictionary* transaccional.

- **MySQL vs PostgreSQL** (la comparación clásica):
  - Postgres es más estricto y "correcto" con el estándar SQL, con tipos más ricos (arrays, `JSONB` indexable, tipos geoespaciales con PostGIS, tipos custom) y extensibilidad.
  - MySQL históricamente fue más simple, ligero y veloz en lecturas concurrentes sencillas; muy presente en hosting compartido y proyectos LAMP.
  - En 2026 la brecha se ha estrechado mucho: ambos son sólidos para producción. La elección suele ir por ecosistema/equipo más que por capacidad técnica pura. Si necesitas SQL avanzado, JSON indexable o GIS, Postgres tiende a ganar; si tu stack/host ya respira MySQL, no hay drama en quedarte.

# Mis notas
-
-
-
