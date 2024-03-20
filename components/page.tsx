/** This is how regular React components work (client-side):

import { useState } from "react"

const ClientSideCard = () => {
    const [state, updateState] = useState()

    // .. something
    // updateState()
} */

/** React Server-side Components do it like this: */

import NewTodoForm from '@components/NewTodoForm'

const getData = async () => {
    await new Promise = ((resolve) => setTimeout(()=>resolve(0), 2000))
    return { data: [1, 2, 3]}; 
}

const Home = async () => {
    const data = await getData() 
    console.log(data);
    return <div>Home at ./components</div>;
}

export default Home;