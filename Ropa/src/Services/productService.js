const API_URL = 'https://dummyjson.com/products/category/womens-dresses'

export async function obtenerProductos(signal) {
  // fetch consulta la API; await espera la respuesta sin bloquear la interfaz.
  const response = await fetch(API_URL, { signal })
  if (!response.ok) {
    throw new Error(`No se pudieron obtener los productos (${response.status}).`)
  }
  const data = await response.json()
  if (!Array.isArray(data.products)) {
    throw new Error('La API devolvió una lista de productos inválida.')
  }
  return data.products
}
