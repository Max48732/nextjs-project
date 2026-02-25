import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Список продуктов',
  description: 'Просмотр всех доступных продуктов в нашем каталоге',
}

export default function ProductsPage() {
  const productIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  return (
    <div style={styles.container}>
      {/* Заголовок с описанием */}
      <div style={styles.header}>
        <h1 style={styles.title}>
          Наши <span style={styles.gradientText}>продукты</span>
        </h1>
        <p style={styles.description}>
          Изучайте динамические маршруты и метаданные в Next.js
        </p>
      </div>

      {/* Сетка продуктов */}
      <div style={styles.grid}>
        {productIds.map((id) => (
          <Link 
            key={id}
            href={`/products/${id}`}
            style={styles.card}
          >
            {/* Номер продукта с градиентом */}
            <div style={styles.cardNumber}>#{id}</div>
            
            {/* Контент */}
            <h2 style={styles.cardTitle}>Пост {id}</h2>
            <p style={styles.cardPreview}>
              Просмотр детальной информации о посте #{id}
            </p>

            <div style={styles.cardMeta}>
              <span style={styles.cardTag}>Next.js</span>
              <span style={styles.cardTag}>API</span>
            </div>
            
            {/* Ссылка с анимацией */}
            <div style={styles.cardLink}>
              Читать далее 
              <span style={styles.cardLinkIcon}>→</span>
            </div>
          </Link>
        ))}
      </div>

      {/* Информационная панель */}
      <div style={styles.infoPanel}>
        <p style={styles.infoText}>
          🚀 Всего продуктов: <strong>{productIds.length}</strong>
        </p>
        <p style={styles.infoText}>
          📦 Динамические маршруты: <strong>/products/[id]</strong>
        </p>
      </div>
    </div>
  )
}

const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
  },
  header: {
    textAlign: 'center' as const,
    marginBottom: '3rem',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: '700',
    marginBottom: '1rem',
    color: '#e2e8f0',
  },
  gradientText: {
    background: 'linear-gradient(135deg, #7c3aed 0%, #ec4899 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  description: {
    fontSize: '1.1rem',
    color: '#94a3b8',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '1.5rem',
    marginBottom: '2rem',
  },
  card: {
    background: 'rgba(30, 30, 46, 0.5)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    border: '1px solid rgba(124, 58, 237, 0.2)',
    borderRadius: '20px',
    padding: '1.5rem',
    textDecoration: 'none',
    transition: 'transform 0.2s, border-color 0.2s',
    position: 'relative' as const,
    overflow: 'hidden',
  },
  cardNumber: {
    position: 'absolute' as const,
    top: '1rem',
    right: '1rem',
    fontSize: '0.875rem',
    color: '#7c3aed',
    fontWeight: '600',
    opacity: 0.5,
  },
  cardTitle: {
    fontSize: '1.25rem',
    fontWeight: '600',
    marginBottom: '0.75rem',
    color: '#e2e8f0',
  },
  cardPreview: {
    fontSize: '0.95rem',
    color: '#94a3b8',
    marginBottom: '1rem',
    lineHeight: '1.5',
  },
  cardMeta: {
    display: 'flex',
    gap: '0.5rem',
    marginBottom: '1rem',
  },
  cardTag: {
    padding: '0.25rem 0.75rem',
    background: 'rgba(124, 58, 237, 0.1)',
    borderRadius: '20px',
    fontSize: '0.75rem',
    color: '#7c3aed',
    border: '1px solid rgba(124, 58, 237, 0.3)',
  },
  cardLink: {
    color: '#7c3aed',
    fontSize: '0.95rem',
    fontWeight: '500',
    display: 'flex',
    alignItems: 'center',
    gap: '0.25rem',
  },
  cardLinkIcon: {
    transition: 'transform 0.2s',
  },
  infoPanel: {
    background: 'rgba(30, 30, 46, 0.5)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    border: '1px solid rgba(124, 58, 237, 0.2)',
    borderRadius: '16px',
    padding: '1.5rem',
    marginTop: '2rem',
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
  },
  infoText: {
    color: '#94a3b8',
    fontSize: '0.95rem',
  },
}