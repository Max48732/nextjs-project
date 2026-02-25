import type { Metadata } from 'next'
import Link from 'next/link'
import { getPost } from '@/app/lib/api'

type Props = {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const post = await getPost(id)
  
  return {
    title: post.title,
    description: post.body.substring(0, 160),
  }
}

export default async function ProductPage({ params }: Props) {
  const { id } = await params
  const post = await getPost(id)

  return (
    <div style={styles.container}>
      {/* Карточка поста */}
      <article style={styles.card}>
        <h1 style={styles.title}>{post.title}</h1>
        
        <div style={styles.metaInfo}>
          <span style={styles.badge}>ID поста: {post.id}</span>
          <span style={styles.badge}>Автор: {post.userId}</span>
        </div>
        
        <div style={styles.content}>
          <p style={styles.bodyText}>{post.body}</p>
        </div>
      </article>

      {/* Навигация */}
      <div style={styles.navigation}>
        <Link href={`/products/${id}/comments`} style={styles.button}>
          💬 Посмотреть комментарии
        </Link>
        
        <Link href="/products" style={styles.buttonSecondary}>
          ← Вернуться к списку
        </Link>
      </div>
    </div>
  )
}

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
  },
  card: {
    background: 'white',
    borderRadius: '12px',
    padding: '30px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    marginBottom: '30px',
    border: '1px solid #eaeaea',
  },
  title: {
    fontSize: '2rem',
    fontWeight: '600',
    color: '#333',
    marginBottom: '20px',
    lineHeight: '1.3',
    textTransform: 'capitalize' as const,
  },
  metaInfo: {
    display: 'flex',
    gap: '10px',
    marginBottom: '25px',
  },
  badge: {
    background: '#f0f0f0',
    padding: '6px 12px',
    borderRadius: '20px',
    fontSize: '0.9rem',
    color: '#666',
  },
  content: {
    borderTop: '1px solid #eaeaea',
    paddingTop: '20px',
  },
  bodyText: {
    fontSize: '1.1rem',
    lineHeight: '1.6',
    color: '#444',
  },
  navigation: {
    display: 'flex',
    gap: '15px',
    justifyContent: 'center',
  },
  button: {
    padding: '12px 24px',
    background: '#0070f3',
    color: 'white',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: '500',
    transition: 'background 0.2s',
  },
  buttonSecondary: {
    padding: '12px 24px',
    background: 'white',
    color: '#333',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: '500',
    border: '1px solid #eaeaea',
    transition: 'background 0.2s',
  }
}