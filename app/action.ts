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

export async function getTodos() {
  try {
    const getTodosController = getInjection('IGetTodosController')
    const todos = await getTodosController()
    return todos
  } catch (err) {
    console.error(err)
    return {
      error: 'An error happened fetching a todo. The developers have been notified. Please try again later.',
    }
  }
}

export async function toggleTodo(id: number) {
  try {
    const toggleTodoController = getInjection('IToggleTodoController')
    await toggleTodoController(id)

    revalidatePath('/')
    return { success: true }
  } catch (err) {
    console.error(err)
    return {
      error: 'An error happened toggling a todo. The developers have been notified. Please try again later.',
    }
  }
}
