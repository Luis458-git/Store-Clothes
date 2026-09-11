import { useState, useEffect } from 'react'
import ProductCard from './Components/ProductCard.jsx'
import StatusCard from './Components/StatusCard.jsx'
import { obtenerProductos } from './Services/productService.js'
import './App.css'

function App() {
  // useState conserva los datos y actualiza la vista cuando cambian.
  const [productos, setProductos] = useState([])
  const [estado, setEstado] = useState('inactivo')
  const [ultimaActualizacion, setUltimaActualizacion] = useState(null)
  const [error, setError] = useState('')

  // useEffect inicia la consulta y la automatización al montar App.
  useEffect(() => {
    const controller = new AbortController()
    let cargando = false

    async function cargarProductos() {
      if (cargando) return
      cargando = true
      setEstado('ejecutando')
      setError('')
      try {
        // async/await permite esperar los productos dentro de try/catch.
        const nuevosProductos = await obtenerProductos(controller.signal)
        if (controller.signal.aborted) return
        setProductos(nuevosProductos)
        setUltimaActualizacion(new Date())
        setEstado('exito')
      } catch (err) {
        if (controller.signal.aborted) return
        setError(err.message || 'Revisa tu conexión a internet.')
        setEstado('error')
      } finally {
        cargando = false
      }
    }

    cargarProductos()
    // setInterval vuelve a consultar cada 10 000 milisegundos.
    const intervalo = setInterval(cargarProductos, 10000)
    return () => {
      // La limpieza elimina el intervalo y cancela la consulta pendiente.
      clearInterval(intervalo)
      controller.abort()
    }
  }, [])

  const productosStockBajo = productos.filter((producto) => producto.stock <= 5).length

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Lino, inicio">lino<span>®</span></a>
        <a className="collection-link" href="#coleccion">La colección <span aria-hidden="true">↗</span></a>
      </header>
      <main id="inicio">
        <section className="intro" aria-labelledby="page-title">
          <div>
            <p className="eyebrow">LINO / ROPA Y CALZADO</p>
            <h1>Tu estilo.<br /><span>Todos los días.</span></h1>
          </div>
          <div className="intro-note">
            <span className="intro-line" aria-hidden="true" />
            <p>Encuentra tu próximo favorito.<br />Nosotros mantenemos las existencias al día.</p>
            <span className="currency-note">Precios en dólares estadounidenses (USD)</span>
          </div>
        </section>
        <StatusCard estado={estado} ultimaActualizacion={ultimaActualizacion} error={error} />
        <section id="coleccion" className="collection" aria-labelledby="collection-title">
          <div className="collection-heading">
            <div><p className="eyebrow">ELIGE TU FAVORITO</p><h2 id="collection-title">Ropa y calzado</h2></div>
            <div className="inventory-summary"><span>{productos.length} productos</span><span>{productosStockBajo} con stock bajo</span></div>
          </div>
          {productos.length > 0 ? (
            <div className="product-grid">
              {productos.map((producto) => <ProductCard key={producto.id} producto={producto} />)}
            </div>
          ) : (
            <p className="empty-state">{estado === 'error' ? 'El catálogo no está disponible. Esperando la próxima revisión automática.' : estado === 'exito' ? 'No hay productos disponibles en este momento.' : 'Preparando la colección…'}</p>
          )}
          <p className="stock-note">Las etiquetas de stock bajo señalan productos con 5 unidades o menos.</p>
        </section>
      </main>
      <footer><span className="footer-brand">lino®</span><p>Estilo simple. Inventario al día.</p><span>Catálogo · DummyJSON</span></footer>
    </>
  )
}

export default App

