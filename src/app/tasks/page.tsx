import type { Metadata } from 'next'
import TaskList from './components/TaskList'

export const metadata: Metadata = {
  title: 'Task List',
  description: 'Список задач из JSONPlaceholder API',
}

type Todo = {
  userId: number
  id: number
  title: string
  completed: boolean
}

export default async function TasksPage() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10', {
    cache: 'no-store',
  })
  const todos: Todo[] = await res.json()

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      {/* Заголовок */}
      <div style={{ marginBottom: '2rem' }}>
        <h1
          style={{
            fontSize: '2.2rem',
            fontWeight: '800',
            color: '#e2e8f0',
            marginBottom: '0.5rem',
          }}
        >
          Task List
        </h1>
        <p style={{ color: '#94a3b8', fontSize: '0.95rem' }}>
          Нажмите на карточку, чтобы изменить статус задачи
        </p>
      </div>

      {/* Дочерний компонент получает данные через props */}
      <TaskList todos={todos} />
    </div>
  )
}
