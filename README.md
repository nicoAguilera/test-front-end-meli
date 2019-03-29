Test práctico para aspirantes al área de front-end de Mercado Libre
==============

> ## Información Importante:
>
> Este proyecto cuenta con dos ramas principales: *master* y *pos-test*.
> En la rama **master** se encuentra el codigo hasta la entrega del test práctico el día 14/03/19.
> En la rama **pos-test** se encuentran los cambios realizados posterior a esta fecha con el fin de completar y/o mejorar el proyecto.

## Ejecución del proyecto

Para ejecutar el proyecto, en primer lugar clonar el repositorio y luego seguir las instrucciones que se detallan a continuación desde el directorio raíz del proyecto:

```bash
$ cd backend
$ npm install
$ cd ../client/
$ npm install
$ cd ..
$ npm install
$ npm start
```

## Estructura

### Client

* src: raíz del código fuente
* src/assets: imagenes
* src/components: componentes utilizados en la aplicación
* src/pages: vistas
* src/utils: utilidades para la aplicación

### Backend

* api: consulta a la API de MeLi

## Plan de Actividades

### Tareas realizadas hasta la entrega del Test

1. Planificación y análisis del proyecto
2. Diseño de componentes
3. Creación de repositorio
4. Desarrollo estructura básica con rutas y páginas
5. Desarrollo del backend
6. Desarrollo estructura básica componentes
7. Corrección de errores entre el Frontend y Backend
8. Agregar estilos al encabezado y assets
9. Agregar estilos página listado de ítems
10. Agregar estilos página ítem
11. Desarrollo estructura básica del Breadcrumb
12. Actualización favicon y title en directorio /public
13. Traducción condición de producto (new -> Nuevo y used -> Usado)
14. Agregar README.md

### Tareas realizadas posterior a la entrega del Test

1. Análisis de las tareas realizadas hasta la entrega y planificación de tareas a continuar
2. Modificación de README.md con información sobre rama pos-examen
3. Corrección de bordes redondeados de cada página
4. Continuar con desarrollo de Breadcrumb

### Tareas pendientes

1. Completar funcionalidad del Breadcrumb
2. Reducir el tamaño de la respuesta de la API de MeLi filtrando por los atributos necesarios solamente.
3. Agregar enlace a detalle del producto en el título de cada ítem en el resultado de búsqueda.
4. Corregir detalles de visualización en los diferentes tamaños de pantalla.
5. Utilizar Sass como preprocesador de CSS.
6. Agregar página para responder ante una petición con error 404.
7. Agregar centésimas al precio del producto en la página del producto.
8. Corregir línea de división entre el listado de productos.
9. Corregir tamaño imagen listado de productos (tiene que ser de 180px x 180px).
10. Agregar tests.
11. Refactorizar método para obtener la condición traducida del ítem.
12. Agregar un corrector de código como ESLint.
13. Identificar si tengo que usar un PureComponent en lugar de un Component.
14. Actualizar método componentWillReceiveProps(nextProps) en el componente ProductListPage por método más seguro static getDerivedStateFromProps(nextProps, prevState).
15. Agregar propTypes y defaultProps a los componentes que tienen atributos.
16. Mejorar performance de la app con preloading, lazyload y suspense.
17. Auditar app con herramienta “Audit” de la consola para desarrolladores de Google.
18. Utilizar server side rendering.
19. Utilizar service worker.
20. Actualizar Web App Manifest por defecto de React.
21. Incorporar Redux para manejar el estado de la aplicación.
22. Renombrar aquellos componentes que no sean consistentes con la función que realizan (ej: ProductDetails a ItemDetails).
23. Optimizar archivos para producción.