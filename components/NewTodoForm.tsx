'use client'

import { useState } from "react"

/** This is rendered on the server.
    You can use client components on the server.
 */
const NewTodoForm = ( onChange ) => {
    const [state, updateState] = useState('')

    return (
        <div><form><input type="text"/></form></div>
    )
}