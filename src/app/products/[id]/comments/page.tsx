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
    title: `Комментарии к посту: ${post.title}`,
    description: `Комментарии к посту ${post.title}`,
  }
}

export default async function CommentsPage({ params }: Props) {
  const { id } = await params
  const post = await getPost(id)

  return (
    <div>
      <h1>Комментарии к посту: {post.title}</h1>
      <p>Страница комментариев для товара с ID: <strong>{id}</strong></p>
      
      <div style={{ 
        padding: '1rem', 
        background: '#e3f2fd', 
        borderRadius: '8px',
        margin: '1rem 0'
      }}>
        <p><strong>Информация о посте:</strong></p>
        <p>{post.body}</p>
      </div>
      
      <p style={{ fontStyle: 'italic', color: '#666' }}>
      </p>
      
      <div style={{ marginTop: '2rem' }}>
        <Link 
          href={`/products/${id}`}
          style={{ 
            padding: '0.5rem 1rem',
            background: '#0070f3',
            color: 'white',
            borderRadius: '4px',
            textDecoration: 'none'
          }}
        >
          Вернуться к продукту
        </Link>
      </div>
    </div>
  )
}