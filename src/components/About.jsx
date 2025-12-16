import React from 'react'
import { useState } from 'react'

export default function About() {

  const [todos, setTodos] = useState([])
  return (
   <>
   
   <button onClick={()=>{
    import('../todos').then(module=>{
      setTodos(module.todos)
    })
   }}>Load data</button>

   <ul>
    {
      todos.map((todo)=>(
        <li key={todo.id}>{todo.title}</li>
      ))
    }
   </ul>
   </>
  )
}
