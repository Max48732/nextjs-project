import type { Metadata } from 'next'
import Link from 'next/link'
import { getPost } from '@/app/lib/api'

type Props = {
  params: Promise<{ id: string }>
}

// Метаданные для страницы комментариев
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
    <div style={styles.container}>
      {/* Хлебные крошки */}
      <div style={styles.breadcrumbs}>
        <Link href="/products" style={styles.breadcrumbLink}>Продукты</Link>
        <span style={styles.breadcrumbSeparator}>/</span>
        <Link href={`/products/${id}`} style={styles.breadcrumbLink}>Пост #{id}</Link>
        <span style={styles.breadcrumbSeparator}>/</span>
        <span style={styles.breadcrumbCurrent}>Комментарии</span>
      </div>

      {/* Заголовок */}
      <div style={styles.header}>
        <h1 style={styles.title}>
          <span style={styles.titleIcon}>💬</span> 
          Комментарии к посту
        </h1>
        <h2 style={styles.postTitle}>«{post.title}»</h2>
      </div>

      {/* Информация о посте (мини-карточка) */}
      <div style={styles.postCard}>
        <div style={styles.postCardHeader}>
          <span style={styles.postBadge}>Пост #{post.id}</span>
          <span style={styles.authorBadge}>Автор: {post.userId}</span>
        </div>
        <p style={styles.postExcerpt}>{post.body.substring(0, 120)}...</p>
        <Link href={`/products/${id}`} style={styles.postLink}>
          Перейти к посту →
        </Link>
      </div>

      {/* Секция комментариев */}
      <div style={styles.commentsSection}>
        <div style={styles.commentsHeader}>
          <h3 style={styles.commentsTitle}>Обсуждение</h3>
          <span style={styles.commentsCount}>12 комментариев</span>
        </div>

        {/* Список комментариев (демо) */}
        <div style={styles.commentsList}>
          {[1, 2, 3, 4].map((i) => (
            <div key={i} style={styles.commentCard}>
              <div style={styles.commentHeader}>
                <div style={styles.commentAuthor}>
                  <div style={styles.avatar}>👤</div>
                  <div>
                    <div style={styles.authorName}>Пользователь {i}</div>
                    <div style={styles.commentDate}>2 часа назад</div>
                  </div>
                </div>
                <span style={styles.commentBadge}>#{i}</span>
              </div>
              <p style={styles.commentText}>
                Это пример комментария к данному посту. В реальном приложении 
                здесь будут данные из API комментариев. А пока просто красивый 
                заглушка для демонстрации стилей.
              </p>
              <div style={styles.commentActions}>
                <button style={styles.likeButton}>❤️ 5</button>
                <button style={styles.replyButton}>↩️ Ответить</button>
              </div>
            </div>
          ))}
        </div>

        {/* Форма добавления комментария (демо) */}
        <div style={styles.commentForm}>
          <textarea 
            style={styles.textarea} 
            placeholder="Напишите комментарий..."
            rows={3}
            disabled
          />
          <div style={styles.formFooter}>
            <span style={styles.formNote}>💡 Войдите, чтобы оставить комментарий</span>
            <button style={styles.submitButton} disabled>Отправить</button>
          </div>
        </div>
      </div>

      {/* Кнопка назад */}
      <div style={styles.navigation}>
        <Link href={`/products/${id}`} style={styles.backButton}>
          ← Вернуться к посту
        </Link>
      </div>
    </div>
  )
}

const styles = {
  container: {
    maxWidth: '900px',
    margin: '0 auto',
    padding: '2rem 1rem',
    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
  },
  breadcrumbs: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    marginBottom: '2rem',
    fontSize: '0.9rem',
    color: '#94a3b8',
  },
  breadcrumbLink: {
    color: '#7c3aed',
    textDecoration: 'none',
    transition: 'color 0.2s',
  },
  breadcrumbSeparator: {
    color: '#475569',
  },
  breadcrumbCurrent: {
    color: '#e2e8f0',
    fontWeight: '500',
  },
  header: {
    marginBottom: '2rem',
    textAlign: 'center' as const,
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: '700',
    marginBottom: '0.5rem',
    background: 'linear-gradient(135deg, #7c3aed 0%, #ec4899 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  titleIcon: {
    fontSize: '2rem',
  },
  postTitle: {
    fontSize: '1.1rem',
    color: '#94a3b8',
    fontWeight: '400',
    fontStyle: 'italic',
  },
  postCard: {
    background: 'rgba(30, 30, 46, 0.5)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    border: '1px solid rgba(124, 58, 237, 0.2)',
    borderRadius: '20px',
    padding: '1.5rem',
    marginBottom: '2rem',
    transition: 'transform 0.2s',
  },
  postCardHeader: {
    display: 'flex',
    gap: '0.75rem',
    marginBottom: '1rem',
  },
  postBadge: {
    background: 'rgba(124, 58, 237, 0.2)',
    color: '#7c3aed',
    padding: '0.25rem 0.75rem',
    borderRadius: '20px',
    fontSize: '0.8rem',
    fontWeight: '600',
    border: '1px solid rgba(124, 58, 237, 0.3)',
  },
  authorBadge: {
    background: 'rgba(236, 72, 153, 0.2)',
    color: '#ec4899',
    padding: '0.25rem 0.75rem',
    borderRadius: '20px',
    fontSize: '0.8rem',
    fontWeight: '600',
    border: '1px solid rgba(236, 72, 153, 0.3)',
  },
  postExcerpt: {
    color: '#e2e8f0',
    fontSize: '1rem',
    lineHeight: '1.6',
    marginBottom: '1rem',
  },
  postLink: {
    color: '#7c3aed',
    textDecoration: 'none',
    fontSize: '0.9rem',
    fontWeight: '500',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.25rem',
    transition: 'gap 0.2s',
  },
  commentsSection: {
    background: 'rgba(15, 15, 26, 0.6)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    border: '1px solid rgba(124, 58, 237, 0.2)',
    borderRadius: '24px',
    padding: '2rem',
    marginBottom: '2rem',
  },
  commentsHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '2rem',
    paddingBottom: '1rem',
    borderBottom: '1px solid rgba(124, 58, 237, 0.2)',
  },
  commentsTitle: {
    fontSize: '1.5rem',
    fontWeight: '600',
    color: '#e2e8f0',
  },
  commentsCount: {
    background: 'rgba(124, 58, 237, 0.2)',
    color: '#7c3aed',
    padding: '0.25rem 1rem',
    borderRadius: '20px',
    fontSize: '0.9rem',
    fontWeight: '500',
  },
  commentsList: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '1.5rem',
    marginBottom: '2rem',
  },
  commentCard: {
    background: 'rgba(30, 30, 46, 0.3)',
    border: '1px solid rgba(124, 58, 237, 0.1)',
    borderRadius: '16px',
    padding: '1.5rem',
    transition: 'background 0.2s',
  },
  commentHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '1rem',
  },
  commentAuthor: {
    display: 'flex',
    gap: '0.75rem',
    alignItems: 'center',
  },
  avatar: {
    width: '40px',
    height: '40px',
    background: 'linear-gradient(135deg, #7c3aed 0%, #ec4899 100%)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.2rem',
  },
  authorName: {
    fontWeight: '600',
    color: '#e2e8f0',
  },
  commentDate: {
    fontSize: '0.8rem',
    color: '#94a3b8',
  },
  commentBadge: {
    background: 'rgba(124, 58, 237, 0.1)',
    color: '#7c3aed',
    padding: '0.25rem 0.75rem',
    borderRadius: '20px',
    fontSize: '0.8rem',
    border: '1px solid rgba(124, 58, 237, 0.2)',
  },
  commentText: {
    color: '#cbd5e1',
    lineHeight: '1.6',
    marginBottom: '1rem',
  },
  commentActions: {
    display: 'flex',
    gap: '1rem',
  },
  likeButton: {
    background: 'none',
    border: '1px solid rgba(124, 58, 237, 0.3)',
    color: '#ec4899',
    padding: '0.5rem 1rem',
    borderRadius: '20px',
    fontSize: '0.9rem',
    cursor: 'pointer',
    transition: 'all 0.2s',
  },
  replyButton: {
    background: 'none',
    border: '1px solid rgba(124, 58, 237, 0.3)',
    color: '#7c3aed',
    padding: '0.5rem 1rem',
    borderRadius: '20px',
    fontSize: '0.9rem',
    cursor: 'pointer',
    transition: 'all 0.2s',
  },
  commentForm: {
    marginTop: '2rem',
    padding: '1.5rem',
    background: 'rgba(30, 30, 46, 0.3)',
    borderRadius: '16px',
    border: '1px solid rgba(124, 58, 237, 0.2)',
  },
  textarea: {
    width: '100%',
    background: 'rgba(15, 15, 26, 0.8)',
    border: '1px solid rgba(124, 58, 237, 0.3)',
    borderRadius: '12px',
    padding: '1rem',
    color: '#e2e8f0',
    fontSize: '0.95rem',
    resize: 'vertical' as const,
    marginBottom: '1rem',
  },
  formFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  formNote: {
    color: '#94a3b8',
    fontSize: '0.9rem',
  },
  submitButton: {
    background: 'linear-gradient(135deg, #7c3aed 0%, #ec4899 100%)',
    border: 'none',
    color: 'white',
    padding: '0.75rem 1.5rem',
    borderRadius: '12px',
    fontSize: '0.95rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'opacity 0.2s',
  },
  navigation: {
    display: 'flex',
    justifyContent: 'center',
  },
  backButton: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.75rem 2rem',
    background: 'rgba(30, 30, 46, 0.8)',
    border: '1px solid rgba(124, 58, 237, 0.3)',
    borderRadius: '12px',
    color: '#e2e8f0',
    textDecoration: 'none',
    fontWeight: '500',
    transition: 'all 0.2s',
  },
} as const