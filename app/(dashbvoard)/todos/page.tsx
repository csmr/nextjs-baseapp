import TodoList from '@/components/TodoList'
import db from '@/utils/db'

const getData = async () => {
    // note lowercase todo for db - schema Todos 
    const todos = await db.todo.findMany({})
    // Where is this log going to be rendered?
    console.log("todos:", todos)
    return todos
}

const TodosPage = async () => {
    const todos = await getData()
    return ( 
        <div>
            <TodoList todos={todos} />
        </div>
    )
}

export default TodosPage