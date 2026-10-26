/* 
💻 Ejercicio Práctico: Consumo de APIs y Control de Errores
Objetivo: Practicar el consumo de datos desde una API pública utilizando fetch, manejar posibles errores con el bloque try...catch y mantener un control de versiones de nuestro código.📝 Instrucciones
1. Preparación y Control de Versiones (Git)
Antes de escribir una sola línea de código, inicialicen un repositorio en Git.
2. Elección y Exploración de la API
Vamos a utilizar la API pública y gratuita JSONPlaceholder.
https://jsonplaceholder.typicode.com/

Elijan solo uno de los siguientes recursos para su ejercicio:
/posts (100 publicaciones)
/comments (500 comentarios)
/albums (100 álbumes)
/todos (200 tareas)
/users (10 usuarios)
¡Importante! Antes de programar, abran la URL en su navegador (ej. [https://jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users)) y analicen qué estructura tiene el JSON. ¿Es un objeto? ¿Es un arreglo? ¿Qué propiedades tiene adentro?
3. Desarrollo de la Función
Abran su editor de código y creen un archivo JavaScript. Deben programar una función (preferiblemente asíncrona) que cumpla con lo siguiente:
Debe utilizar fetch para hacer la petición al recurso que eligieron en el paso anterior.
Debe estar envuelta en un bloque try...catch para capturar y mostrar cualquier error en caso de que la petición falle.
Una vez que obtengan la respuesta y la conviertan a formato JSON, no impriman todo el objeto directamente. Deben extraer y mostrar por la consola al menos 3 datos específicos (por ejemplo: el nombre, el email y la ciudad si eligieron /users; o el ID, el título y el estado si eligieron /todos).
Subir la solucion a su git

Suerte
*/


/* 
1. https://github.com/fatimafajardonovo-sketch/ejercicio-fetch
2. Recurso: /posts. La respuesta es un arreglo de objetos. Cada publicación tiene:
userId (number), id (number), title (string) y body (string).
*/

const obtenerPublicaciones = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        const publicaciones = await response.json()
        console.log (publicaciones.id)
        console.log ("titulo", publicaciones.title)
        console.log ("contenido", publicaciones.blog)
    } catch (error) {
        console.error("No se pudieron obtener las publicaciones:", error)
    }
}

obtenerPublicaciones()

