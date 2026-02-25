import { cache } from 'react'

export type Post = {
  userId: number
  id: number
  title: string
  body: string
}

// Мемоизированная функция для получения поста
export const getPost = cache(async (id: string): Promise<Post> => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  
  if (!response.ok) {
    throw new Error(`Failed to fetch post with id ${id}`)
  }
  
  return response.json()
})