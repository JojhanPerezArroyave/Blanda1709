# top-headlinesroom Dashboard Backend

Este proyecto provee una API agregadora de noticias para el dashboard colaborativo del equipo, utilizando top-headlinesAPI y JSONPlaceholder.

## Descripción

La API permite obtener noticias por categoría, buscar por palabras clave, consultar comentarios y marcar noticias como leídas o relevantes. Está pensada para integrarse con un frontend en React y soporta funcionalidades en tiempo real.

## APIs Utilizadas
- **top-headlinesAPI**: https://top-headlinesapi.org/ (hasta 1000 requests/día)
- **JSONPlaceholder**: https://jsonplaceholder.typicode.com/ (para comentarios)

## Endpoints

### 1. `GET /top-headlines`
Obtiene noticias filtradas por categoría y/o palabra clave.
- **Parámetros de consulta:**
	- `category`: Categoría de la noticia (ej: business, sports, technology)
	- `q`: Palabra clave
	- `pageSize`: Cantidad de resultados por página (máx. 100)
	- `page`: Página de resultados
- **Ejemplo:**
	```http
	GET /top-headlines?category=technology&q=react&pageSize=10
	```

### 2. `GET /top-headlines/:id`
Obtiene el detalle de una noticia específica por su identificador.
- **Ejemplo:**
	```http
	GET /top-headlines/12345
	```

### 3. `GET /top-headlines/comments/:id`
Obtiene los comentarios asociados a una noticia específica usando JSONPlaceholder.
- **Ejemplo:**
	```http
	GET /top-headlines/comments/12345
	```

### 4. `POST /top-headlines/mark`
Marca una noticia como leída o relevante para el equipo.
- **Body:**
	```json
	{
		"top-headlinesId": "12345",
		"status": "read" // o "relevant"
	}
	```

## Ejemplo de respuesta de top-headlinesAPI
```json
{
	"status": "ok",
	"totalResults": 38,
	"articles": [
		{
			"source": { "id": null, "name": "TechCrunch" },
			"author": "John Doe",
			"title": "Nueva tecnología en React",
			"description": "Descripción de la noticia...",
			"url": "https://techcrunch.com/...",
			"publishedAt": "2025-09-17T12:00:00Z"
		}
		// ...más artículos
	]
}
```

## Ejemplo de respuesta de comentarios (JSONPlaceholder)
```json
[
	{
		"postId": 1,
		"id": 1,
		"name": "Comentario de usuario",
		"email": "usuario@ejemplo.com",
		"body": "Texto del comentario..."
	}
	// ...más comentarios
]
```

## Notas
- Los endpoints pueden estar sujetos a límites de uso de top-headlinesAPI.
- Los comentarios son simulados usando JSONPlaceholder.
- Para más información sobre categorías y parámetros, consultar la documentación oficial de top-headlinesAPI.

---
