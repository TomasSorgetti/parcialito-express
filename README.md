# Blog de programación

Los usuarios pueden registrarse, crear y gestionar artículos, interactuar mediante comentarios y stars (similar a GitHub), y buscar contenido con una searchbar avanzada. La aplicación incluye planes de suscripción (Free, Pro, Premium) que limitan funcionalidades, y un componente de inteligencia artificial para generar borradores de artículos y recomendaciones.

## Características Principales

### Gestión de Artículos

    - Crear, editar, listar y eliminar artículos (CRUD).
    - Filtros dinámicos por autor, fecha, tags o popularidad (basado en stars).

### Searchbar

    - Búsqueda full-text de artículos por título, contenido o tags usando Elasticsearch.
    - Soporte para autocompletado y resaltado de resultados (en plan Pro/Premium).

### Interacciones Sociales

    - Comentar artículos (con posibilidad de discusiones en tiempo real para Pro/Premium).
    - Sistema de "stars" para marcar artículos favoritos, con contadores visibles.

### Suscripciones

    - Planes Free (lectura básica, límite de 1-2 posts/mes), Pro (edición ilimitada, filtros avanzados, comentarios) y Premium (acceso completo a AI, stars ilimitados).
    - Dashboard de usuario para ver límites y estado del plan.

### Integración de AI (Premium)

    - Generación de borradores de artículos a partir de prompts (e.g., "Tutorial Node.js con ejemplos SOLID").
    - Recomendaciones personalizadas basadas en stars o historial.
    - Moderación automática de comentarios (opcional, para evitar spam/toxicity).

### Escalabilidad y Performance

    - Cacheo con Redis para consultas frecuentes (e.g., checks de permisos, contadores de stars).
    - Colas de trabajo con RabbitMQ o Kafka para tareas asíncronas (envío de emails, procesamiento de AI).
    - Despliegue con Docker para entornos consistentes.

## Tecnologías

- Backend: Node.js + Express (API RESTful).
- Base de Datos: MongoDB (almacenamiento de usuarios, artículos, comentarios, stars).
- Búsqueda: Elasticsearch (searchbar con full-text, autocompletado y filtros).
- Cache: Redis (optimización de permisos, contadores y sesiones).
- Colas de Trabajo: RabbitMQ o Kafka (tareas asíncronas como notificaciones o generación de AI).
- Contenerización: Docker (entornos locales y pruebas).
- Autenticación: JWT para sesiones y RBAC para permisos por plan.
- Monitoreo (opcional): Prometheus o ELK stack para métricas.

## Arquitectura

/
├── public/ # Api docs
│ └── favicon.svg  
├── src
│ ├── database #mongodb
│ │ ├── repositories/
│ │ ├── schemas/
│ │ └── database.js
│ │
│ ├── infrastructure #services
│ │ ├── elasticsearch/
│ │ ├── redis/
│ │ ├── rabbitmq/
│ │ └── email/
│ │
│ ├── di #dependency injection
│ │ └── container.js
│ │
│ ├── domain #class module
│ │ ├── article
│ │ │ ├── validations/
│ │ │ ├── dtos/
│ │ │ ├── article.controler
│ │ │ ├── article.routes
│ │ │ └── article.service
│ │ ├── auth
│ │ ├── category
│ │ ├── comment
│ │ └── user
│ │
│ ├── shared #shared utils
│ │ ├── config/
│ │ ├── errors/
│ │ ├── utils/
│ │ │ └── jwt
│ │ └── middlewares/
│ │
│ └── server.js
└── package.json
