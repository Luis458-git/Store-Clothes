import { useRef } from 'react'

const formatoPrecio = new Intl.NumberFormat('es-GT', {
  style: 'currency',
  currency: 'USD',
})
const categorias = {
  'womens-dresses': 'Vestidos de mujer',
  tops: 'Blusas y tops',
  'mens-shirts': 'Camisas de hombre',
  'womens-shoes': 'Calzado de mujer',
  'mens-shoes': 'Calzado de hombre',
}

export default function ProductCard({ producto }) {
  const dialogo = useRef(null)
  const stockBajo = producto.stock <= 5
  const categoria = categorias[producto.category] || producto.category
  const caracteristicas = [
    ['Categoría', categoria],
    ['Marca', producto.brand],
    ['Precio', formatoPrecio.format(producto.price)],
    ['Stock', `${producto.stock} unidades${stockBajo ? ' · Stock bajo' : ''}`],
    ['Valoración', producto.rating != null ? `${producto.rating} / 5` : null],
    ['Descuento', producto.discountPercentage != null ? `${producto.discountPercentage}%` : null],
    ['Código del producto', producto.sku],
    ['Envío', producto.shippingInformation],
    ['Garantía', producto.warrantyInformation],
    ['Devoluciones', producto.returnPolicy],
  ].filter(([, valor]) => valor != null && valor !== '')

  return (
    <article className={`product-card${stockBajo ? ' product-card--low' : ''}`}>
      <button className="product-open" onClick={() => dialogo.current.showModal()} aria-label={`Ver características de ${producto.title}`} aria-haspopup="dialog">
        <span className="product-image">
          <img src={producto.thumbnail} alt={producto.title} loading="lazy" />
          {stockBajo && <span className="low-badge">Stock bajo</span>}
        </span>
        <span className="product-info">
          <span className="category">{categoria}</span>
          <span className="product-title">{producto.title}</span>
          <span className="price">{formatoPrecio.format(producto.price)}</span>
          <span className={`stock ${stockBajo ? 'stock--low' : 'stock--normal'}`}>
            <span className="dot" aria-hidden="true" />
            <span>{producto.stock} unidades disponibles{stockBajo ? ' · Reponer' : ''}</span>
          </span>
          <span className="details-link">Ver características <span aria-hidden="true">↗</span></span>
        </span>
      </button>
      {/* dialog permite cerrar con Escape y devuelve el foco al producto. */}
      <dialog ref={dialogo} className="product-dialog" aria-labelledby={`producto-${producto.id}`}>
        <form method="dialog" className="dialog-toolbar"><button className="dialog-close" aria-label="Cerrar características">Cerrar ×</button></form>
        <div className="dialog-layout">
          <div className="detail-image"><img src={producto.images?.[0] || producto.thumbnail} alt={producto.title} /></div>
          <div className="detail-content">
            <p className="category">{categoria}</p>
            <h2 id={`producto-${producto.id}`}>{producto.title}</h2>
            <p className="product-description">{producto.description || 'Descripción no disponible.'}</p>
            <dl className="characteristics">
              {caracteristicas.map(([nombre, valor]) => <div key={nombre}><dt>{nombre}</dt><dd>{valor}</dd></div>)}
            </dl>
          </div>
        </div>
      </dialog>
    </article>
  )
}
