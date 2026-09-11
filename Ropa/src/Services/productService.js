const API_URL = 'https://dummyjson.com/products/category/'
const CATEGORIAS = ['womens-dresses', 'tops', 'mens-shirts', 'womens-shoes', 'mens-shoes']

export async function obtenerProductos(signal) {
  // Consultamos las categorías en paralelo con fetch y async/await.
  const grupos = await Promise.all(CATEGORIAS.map(async (categoria) => {
    const response = await fetch(`${API_URL}${categoria}?limit=0`, { signal })
    if (!response.ok) {
      throw new Error(`No se pudieron obtener los productos (${response.status}).`)
    }
    const data = await response.json()
    if (!Array.isArray(data.products)) {
      throw new Error('La API devolvió una lista de productos inválida.')
    }
    return data.products
  }))
  return grupos.flat()
}
