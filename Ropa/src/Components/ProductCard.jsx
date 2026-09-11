const formatoPrecio = new Intl.NumberFormat('es-GT', {
  style: 'currency',
  currency: 'USD',
})

export default function ProductCard({ producto }) {
  const stockBajo = producto.stock <= 5

  return (
    <article className={`product-card${stockBajo ? ' product-card--low' : ''}`}>
      <div className="product-image">
        <img src={producto.thumbnail} alt={producto.title} loading="lazy" />
        {stockBajo && <span className="low-badge">Stock bajo</span>}
      </div>
      <div className="product-info">
        <p className="category">{producto.category === 'womens-dresses' ? 'Vestidos de mujer' : producto.category}</p>
        <h3>{producto.title}</h3>
        <p className="price">{formatoPrecio.format(producto.price)}</p>
        <div className={`stock ${stockBajo ? 'stock--low' : 'stock--normal'}`}>
          <span className="dot" aria-hidden="true" />
          <span>{producto.stock} unidades disponibles{stockBajo ? ' · Reponer' : ''}</span>
        </div>
      </div>
    </article>
  )
}
