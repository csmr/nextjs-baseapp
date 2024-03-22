import { newTodo } from "@/utils/actions";

const NewTodoForm = ({}) => {
    return (
        <div>
            <form action={newTodo}>
                <input type="text" name="contentTxt" className="border border-black/25"/>
                <button type="submit" className="border border-black/25">new todo</button>
            </form>
        </div>
    )
}

export default NewTodoForm;