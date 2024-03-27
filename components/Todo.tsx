'use client'
import { completeTodo } from "@/utils/actions"
// what this does is 'deprioritise' this until important stuff is done
import { useTransition } from "react" 

const Todo = ({ todo }) => {
    const [isPending, startTransitions] = useTransition()
    return (
        <div className={`border border-black/20 ${todo.completed ? 'line-through text-gray-900 cursor-pointer' : ''}`}
             onClick={ ()=>{ startTransitions( () => completeTodo(todo.id) ) }}>
                {todo.content}
             </div>
    )
}

export default Todo