import Link from 'next/link'

export default function Home() {
  return (
    <div style={homeStyles.container}>
      {/* Hero секция */}
      <section style={homeStyles.hero}>
        <h1 style={homeStyles.title}>
          Добро пожаловать в{' '}
          <span style={homeStyles.gradientText}>WEBLAB</span>
        </h1>
        <p style={homeStyles.subtitle}>
          Изучаем Next.js с любовью к современному вебу
        </p>
        
        {/* Статистика */}
        <div style={homeStyles.stats}>
          <div style={homeStyles.statItem}>
            <span style={homeStyles.statNumber}>10+</span>
            <span style={homeStyles.statLabel}>Продуктов</span>
          </div>
          <div style={homeStyles.statItem}>
            <span style={homeStyles.statNumber}>24/7</span>
            <span style={homeStyles.statLabel}>Доступно</span>
          </div>
          <div style={homeStyles.statItem}>
            <span style={homeStyles.statNumber}>100%</span>
            <span style={homeStyles.statLabel}>Next.js</span>
          </div>
        </div>

        {/* Кнопки действий */}
        <div style={homeStyles.actions}>
          <Link href="/products" style={homeStyles.primaryButton}>
            Перейти к продуктам
            <span style={homeStyles.buttonIcon}>→</span>
          </Link>
          <a 
            href="https://nextjs.org/docs" 
            target="_blank" 
            rel="noopener noreferrer"
            style={homeStyles.secondaryButton}
          >
            Документация
          </a>
        </div>
      </section>

      {/* Карточки с преимуществами */}
      <section style={homeStyles.features}>
        <h2 style={homeStyles.featuresTitle}>Почему Next.js?</h2>
        <div style={homeStyles.featuresGrid}>
          <div style={homeStyles.featureCard}>
            <div style={homeStyles.featureIcon}>⚡</div>
            <h3 style={homeStyles.featureName}>Молниеносно</h3>
            <p style={homeStyles.featureDesc}>
              Мгновенная навигация без перезагрузок благодаря App Router
            </p>
          </div>
          <div style={homeStyles.featureCard}>
            <div style={homeStyles.featureIcon}>🎨</div>
            <h3 style={homeStyles.featureName}>Красиво</h3>
            <p style={homeStyles.featureDesc}>
              Современный дизайн с градиентами и стеклянными эффектами
            </p>
          </div>
          <div style={homeStyles.featureCard}>
            <div style={homeStyles.featureIcon}>🛡️</div>
            <h3 style={homeStyles.featureName}>Надежно</h3>
            <p style={homeStyles.featureDesc}>
              Серверные компоненты и типобезопасность с TypeScript
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}


const homeStyles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  hero: {
    textAlign: 'center' as const,
    padding: '4rem 2rem',
    background: 'rgba(30, 30, 46, 0.3)',
    borderRadius: '32px',
    border: '1px solid rgba(124, 58, 237, 0.2)',
    marginBottom: '4rem',
  },
  title: {
    fontSize: '3.5rem',
    fontWeight: '800',
    lineHeight: '1.2',
    marginBottom: '1rem',
    color: '#e2e8f0',
  },
  gradientText: {
    background: 'linear-gradient(135deg, #7c3aed 0%, #ec4899 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  subtitle: {
    fontSize: '1.25rem',
    color: '#94a3b8',
    marginBottom: '3rem',
  },
  stats: {
    display: 'flex',
    justifyContent: 'center',
    gap: '3rem',
    marginBottom: '3rem',
  },
  statItem: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
  },
  statNumber: {
    fontSize: '2rem',
    fontWeight: '700',
    background: 'linear-gradient(135deg, #7c3aed 0%, #ec4899 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  statLabel: {
    fontSize: '0.875rem',
    color: '#94a3b8',
    marginTop: '0.25rem',
  },
  actions: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
  },
  primaryButton: {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '0.75rem 1.5rem',
    background: 'linear-gradient(135deg, #7c3aed 0%, #ec4899 100%)',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '12px',
    fontWeight: '600',
    transition: 'transform 0.2s, box-shadow 0.2s',
  },
  buttonIcon: {
    marginLeft: '0.5rem',
    transition: 'transform 0.2s',
  },
  secondaryButton: {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '0.75rem 1.5rem',
    background: 'rgba(255, 255, 255, 0.1)',
    color: '#e2e8f0',
    textDecoration: 'none',
    borderRadius: '12px',
    fontWeight: '600',
    border: '1px solid rgba(124, 58, 237, 0.3)',
    transition: 'background 0.2s',
  },
  features: {
    padding: '2rem',
  },
  featuresTitle: {
    fontSize: '2rem',
    fontWeight: '700',
    textAlign: 'center' as const,
    marginBottom: '3rem',
    color: '#e2e8f0',
  },
  featuresGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '2rem',
  },
  featureCard: {
    padding: '2rem',
    background: 'rgba(30, 30, 46, 0.5)',
    borderRadius: '24px',
    border: '1px solid rgba(124, 58, 237, 0.2)',
    textAlign: 'center' as const,
    transition: 'transform 0.2s',
  },
  featureIcon: {
    fontSize: '3rem',
    marginBottom: '1rem',
  },
  featureName: {
    fontSize: '1.25rem',
    fontWeight: '600',
    marginBottom: '0.5rem',
    color: '#e2e8f0',
  },
  featureDesc: {
    fontSize: '0.95rem',
    color: '#94a3b8',
    lineHeight: '1.6',
  },
}