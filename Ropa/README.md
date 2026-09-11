# Lino · Tienda de ropa

Proyecto académico desarrollado con React, JavaScript y Vite. Consulta productos de DummyJSON con `fetch` y revisa automáticamente sus existencias cada 10 segundos.

## Requisitos previos

- Node.js 22.14.0 (versión utilizada en este proyecto) y npm.
- Conexión a internet para instalar las dependencias y consultar el catálogo.

Puedes comprobar tu instalación con:

```bash
node --version
npm --version
```

## Instalación

1. Clona o descarga este repositorio.
2. Abre una terminal en la carpeta `Ropa`, donde se encuentra `package.json`.
3. Instala las dependencias definidas en el archivo de bloqueo:

```bash
npm ci
```

## Ejecutar en desarrollo

Desde la misma carpeta, ejecuta:

```bash
npm run dev
```

Abre la dirección que muestra Vite en la terminal, normalmente `http://localhost:5173`. Si ese puerto está ocupado, utiliza la dirección indicada por Vite. Mantén la terminal abierta mientras usas la aplicación; para detener el servidor, presiona `Ctrl+C`.

En Windows, si PowerShell bloquea `npm.ps1`, utiliza `npm.cmd ci` y `npm.cmd run dev` en lugar de los comandos anteriores.

## Uso

- El catálogo muestra vestidos, blusas, camisas y calzado con imagen, nombre, categoría, precio en USD y stock.
- Haz clic en una tarjeta para ver su descripción y las características disponibles. Cierra la ventana con **Cerrar** o con la tecla **Escape**.
- La revisión comienza al abrir la aplicación y se repite cada 10 segundos.
- El panel muestra el estado de la automatización y la última actualización correcta.
- Los productos con 5 unidades o menos llevan una alerta de stock bajo.
- Si la consulta falla, se muestra el error y se reintenta automáticamente. Los datos anteriores se conservan, pero pueden estar desactualizados.

## Comandos adicionales

```bash
npm run lint
npm run build
npm run preview
```

`lint` revisa el código con ESLint. `build` genera la versión de producción en `dist`. Después de compilar, `preview` permite revisar esa versión en la dirección que indique la terminal.

## Organización del código

- `src/App.jsx`: estados, consulta inicial y automatización con limpieza del intervalo.
- `src/Components/ProductCard.jsx`: tarjeta y ventana de características del producto.
- `src/Components/StatusCard.jsx`: estado de la automatización y última actualización.
- `src/Services/productService.js`: consultas a la API y validación de respuestas.
- `src/App.css`: estilos y adaptación a pantallas pequeñas.
- `src/Docs/Requerimientos.md`: requisitos del laboratorio y su cumplimiento.

## Fuente de datos

El servicio consulta `https://dummyjson.com/products/category/` para las categorías `womens-dresses`, `tops`, `mens-shirts`, `womens-shoes` y `mens-shoes`.

La aplicación no necesita claves de API, variables de entorno ni un servidor de base de datos local. El catálogo se obtiene directamente de DummyJSON; `db.json` no interviene en esta consulta.
