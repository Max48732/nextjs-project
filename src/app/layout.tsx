import type { Metadata } from 'next'
import Link from 'next/link'
import './globals.css'

export const metadata: Metadata = {
  title: 'My App',
  description: 'My Next.js application',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>
        <header style={styles.header}>
          <nav style={styles.nav}>
            <Link href="/" style={styles.logo}>
              <span style={styles.logoText}>WEB</span>
              <span style={styles.logoAccent}>LAB</span>
            </Link>
            <div style={styles.links}>
              <Link href="/" style={styles.link}>Главная</Link>
              <Link href="/products" style={styles.link}>Продукты</Link>
            </div>
          </nav>
        </header>
        
        <main style={styles.main}>
          {children}
        </main>
        
        <footer style={styles.footer}>
        </footer>
      </body>
    </html>
  )
}

const styles = {
  header: {
    background: 'rgba(15, 15, 26, 0.8)',
    WebkitBackdropFilter: 'blur(10px)',
    backdropFilter: 'blur(10px)',
    borderBottom: '1px solid rgba(124, 58, 237, 0.2)',
    position: 'sticky' as const,
    top: 0,
    zIndex: 100,
  },
  nav: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '1rem 2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    textDecoration: 'none',
    fontSize: '1.5rem',
    fontWeight: '800',
    letterSpacing: '-0.5px',
  },
  logoText: {
    color: '#e2e8f0',
  },
  logoAccent: {
    background: 'linear-gradient(135deg, #7c3aed 0%, #ec4899 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    marginLeft: '2px',
  },
  links: {
    display: 'flex',
    gap: '2rem',
  },
  link: {
    color: '#e2e8f0',
    textDecoration: 'none',
    fontWeight: '500',
    transition: 'color 0.2s',
    position: 'relative' as const,
  },
  main: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '2rem',
    minHeight: 'calc(100vh - 140px)',
  },
  footer: {
    textAlign: 'center' as const,
    padding: '2rem',
    color: '#94a3b8',
    borderTop: '1px solid rgba(124, 58, 237, 0.2)',
    background: 'rgba(15, 15, 26, 0.5)',
    WebkitBackdropFilter: 'blur(10px)',
    backdropFilter: 'blur(10px)',
  },
  footerSmall: {
    fontSize: '0.875rem',
    marginTop: '0.5rem',
    opacity: 0.7,
  }
}