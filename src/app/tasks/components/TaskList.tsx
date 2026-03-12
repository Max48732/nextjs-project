'use client'

import TaskCard from './TaskCard'

type Todo = {
  userId: number
  id: number
  title: string
  completed: boolean
}

type Props = {
  todos: Todo[]
}

export default function TaskList({ todos }: Props) {
  return (
    <div
      style={{
        background: 'rgba(30, 30, 46, 0.4)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        border: '1px solid rgba(124, 58, 237, 0.2)',
        borderRadius: '24px',
        padding: '2rem',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
        {todos.map((todo) => (
          <TaskCard key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  )
}
