'use server'
import { revalidatePath } from 'next/cache'
import db from './db'

export const newTodo = async (formData) => {
    const todo = await db.todo.create({
        data: {
            content: formData.get('contentTxt'),
        }
    })
    console.log("new todo", todo)
    revalidatePath('/todos')
}
