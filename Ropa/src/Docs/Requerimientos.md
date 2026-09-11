Estoy desarrollando un laboratorio de automatización con React.

El proyecto ya está creado con Vite + React y se llama `ropa`.

IMPORTANTE:

* NO crees nuevas carpetas.
* NO crees nuevos archivos.
* NO cambies los nombres de los archivos existentes.
* NO instales nuevas librerías.
* Usa únicamente React, JavaScript, CSS y `fetch`.
* Trabaja solamente con los archivos que ya existen.

Estructura disponible:

ropa/
├── src/
│   ├── components/
│   │   ├── ProductCard.jsx
│   │   └── StatusCard.jsx
│   ├── services/
│   │   └── productService.js
│   ├── styles/
│   │   └── App.css
│   ├── App.jsx
│   └── main.jsx
├── db.json
├── package.json
├── index.html
└── README.md

OBJETIVO:

Crear una aplicación de tienda de ropa que consulte productos desde una API externa y automatice la revisión del stock.

API:

https://dummyjson.com/products/category/womens-dresses

REQUISITOS OBLIGATORIOS:

[x] Usar `useState`.
[x] Usar `useEffect`.
[x] Obtener productos mediante `fetch`.
[x] Usar `async/await`.
[x] Manejar errores con `try/catch`.
[x] Crear una automatización con `setInterval`.
[x] Actualizar automáticamente los productos cada 10 segundos.
[x] Limpiar el intervalo usando el `return` del `useEffect`.
[x] Manejar los estados:
- inactivo
- ejecutando
- exito
- error
[x] Detectar automáticamente productos con stock bajo.
[x] Considerar stock bajo cuando `stock <= 5`.
[x] Mostrar una alerta visual en los productos con stock bajo.
[x] Utilizar `ProductCard.jsx` como componente reutilizable para cada producto.
[x] Utilizar `StatusCard.jsx` para mostrar el estado de la automatización.
[x] Mantener la lógica de conexión con la API dentro de `productService.js`.
[x] Mostrar imagen, nombre, categoría, precio y stock del producto.
[x] Crear un diseño de tienda de ropa limpio y moderno.
[x] Hacer la interfaz responsive.
[x] Utilizar únicamente `App.css` para los estilos.
[x] Incluir en `README.md` instrucciones para instalar y ejecutar el proyecto.

DISTRIBUCIÓN DE RESPONSABILIDADES:

`productService.js`

* Guardar la URL de la API.
* Crear la función asíncrona para obtener productos.
* Usar `fetch`.
* Validar `response.ok`.
* Retornar `data.products`.

`ProductCard.jsx`

* Recibir un producto mediante props.
* Mostrar imagen.
* Mostrar nombre.
* Mostrar categoría.
* Mostrar precio.
* Mostrar stock.
* Mostrar visualmente si el stock es bajo.

`StatusCard.jsx`

* Recibir el estado de la automatización mediante props.
* Mostrar si está:

  * Inactivo
  * Ejecutando
  * Éxito
  * Error
* Mostrar la última actualización si está disponible.

`App.jsx`

* Importar `useState` y `useEffect`.
* Guardar los productos en un estado.
* Guardar el estado de la automatización.
* Crear una función para cargar productos.
* Ejecutarla cuando inicia la aplicación.
* Crear un `setInterval` de 10 segundos.
* Volver a consultar automáticamente la API.
* Limpiar el intervalo al desmontar el componente.
* Renderizar `StatusCard`.
* Renderizar los productos utilizando `.map()`.
* Renderizar cada producto utilizando `ProductCard`.

`App.css`

* Crear todo el diseño.
* Header de tienda de ropa.
* Contenedor principal.
* Grid responsive de productos.
* Cards de productos.
* Indicadores visuales para stock normal y stock bajo.
* Estilos para los diferentes estados de automatización.

FLUJO ESPERADO:

Inicio
→ se monta App
→ useEffect
→ cargarProductos()
→ estado = "ejecutando"
→ fetch a API
→ ¿respuesta correcta?
→ Sí:
productos actualizados
estado = "exito"
→ No:
estado = "error"
→ esperar 10 segundos
→ volver a ejecutar

IMPORTANTE:

No compliques innecesariamente el código.

El proyecto es académico y debe ser fácil de leer y explicar.

Agrega comentarios cortos en las partes importantes para poder entender:

* `useState`
* `useEffect`
* `fetch`
* `async/await`
* `setInterval`
* limpieza del efecto

Antes de terminar, revisa que todos los imports y exports sean correctos y que el proyecto pueda ejecutarse con:

npm run dev

No modifiques `package.json` salvo que sea estrictamente necesario.
No utilices Axios, Bootstrap, Tailwind, React Router ni otras librerías.
