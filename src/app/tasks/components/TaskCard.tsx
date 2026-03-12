'use client'

import { useState } from 'react'

type Todo = {
  userId: number
  id: number
  title: string
  completed: boolean
}

type Props = {
  todo: Todo
}

export default function TaskCard({ todo }: Props) {
  const [isCompleted, setIsCompleted] = useState(todo.completed)

  return (
    <div
      onClick={() => setIsCompleted(!isCompleted)}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1rem 1.5rem',
        background: isCompleted
          ? 'rgba(34, 197, 94, 0.07)'
          : 'rgba(30, 30, 46, 0.5)',
        border: `1px solid ${isCompleted ? 'rgba(34, 197, 94, 0.3)' : 'rgba(124, 58, 237, 0.2)'}`,
        borderRadius: '16px',
        cursor: 'pointer',
        transition: 'all 0.25s ease',
        userSelect: 'none',
      }}
    >
      {/* Иконка статуса */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flex: 1, minWidth: 0 }}>
        <div
          style={{
            width: '28px',
            height: '28px',
            borderRadius: '50%',
            border: `2px solid ${isCompleted ? '#22c55e' : 'rgba(124, 58, 237, 0.5)'}`,
            background: isCompleted ? 'rgba(34, 197, 94, 0.15)' : 'transparent',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            transition: 'all 0.25s ease',
          }}
        >
          {isCompleted && (
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M2 7L5.5 10.5L12 4"
                stroke="#22c55e"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </div>

        {/* Текст задачи */}
        <div style={{ minWidth: 0 }}>
          <p
            style={{
              color: isCompleted ? '#94a3b8' : '#e2e8f0',
              fontSize: '0.95rem',
              fontWeight: '500',
              textDecoration: isCompleted ? 'line-through' : 'none',
              marginBottom: '0.2rem',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              transition: 'all 0.25s ease',
            }}
          >
            {todo.title}
          </p>
          <p style={{ color: '#64748b', fontSize: '0.78rem' }}>
            ID: {todo.id} &bull; User: {todo.userId}
          </p>
        </div>
      </div>

      {/* Бейдж статуса */}
      <span
        style={{
          padding: '0.3rem 0.9rem',
          borderRadius: '20px',
          fontSize: '0.8rem',
          fontWeight: '600',
          flexShrink: 0,
          marginLeft: '1rem',
          background: isCompleted ? '#22c55e' : 'transparent',
          color: isCompleted ? '#fff' : '#94a3b8',
          border: isCompleted ? 'none' : '1px solid rgba(148, 163, 184, 0.3)',
          transition: 'all 0.25s ease',
        }}
      >
        {isCompleted ? 'Completed' : 'In Progress'}
      </span>
    </div>
  )
}
