'use server'

import { getInjection } from '@/di/container'
import { revalidatePath } from 'next/cache'

export async function createTodo(formData: string) {
  try {
    const createTodoController = getInjection('ICreateTodoController')
    await createTodoController({ todo: formData })
  } catch (err) {
    console.error(err)
    return {
      error: 'An error happened while creating a todo. The developers have been notified. Please try again later.',
    }
  }

  revalidatePath('/')
  return { success: true }
}
