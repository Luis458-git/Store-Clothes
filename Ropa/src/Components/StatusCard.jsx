const estados = {
  inactivo: { titulo: 'Inactivo', detalle: 'Preparando la revisión del inventario.' },
  ejecutando: { titulo: 'Ejecutando', detalle: 'Consultando productos y revisando existencias…' },
  exito: { titulo: 'Éxito', detalle: 'Inventario actualizado. Próxima revisión automática en 10 segundos.' },
  error: { titulo: 'Error', detalle: 'No se pudo actualizar. Se reintentará automáticamente cada 10 segundos.' },
}

export default function StatusCard({ estado, ultimaActualizacion, error }) {
  const informacion = estados[estado]

  return (
    <section className={`status-card status-card--${estado}`} aria-label="Estado de la automatización" aria-live="polite" aria-atomic="true">
      <div className="status-heading">
        <span className="status-symbol" aria-hidden="true">↻</span>
        <div>
          <p className="eyebrow">Revisión automática · cada 10 s</p>
          <h2>{informacion.titulo}</h2>
        </div>
      </div>
      <div className="status-detail">
        <p>{informacion.detalle}</p>
        {error && <p className="error-message">{error} Los datos anteriores se conservan, pero pueden estar desactualizados.</p>}
        <p className="last-update">Última actualización: {ultimaActualizacion ? <time dateTime={ultimaActualizacion.toISOString()}>{ultimaActualizacion.toLocaleString('es-GT')}</time> : 'pendiente'}</p>
      </div>
    </section>
  )
}
