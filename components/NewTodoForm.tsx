'use client'

import { useState } from "react"

/** A client component... (^use client at top) 
    This is rendered on the server 
    - but not executed on the server;
    client-side js won't work.
    You can use client components on the server.
 */
const NewTodoForm = ( onChange ) => {
    const [state, updateState] = useState('')

    return (
        <div><form><input type="text"/></form></div>
    )
}