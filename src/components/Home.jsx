import React from 'react'
import Counter from './Counter'
import OldCounter from './OldCounter'
import ClickCounter from './ClickCounter'
import HoverCounter from './HoverCounter'

export default function Home() {
  return (
    <>
    <h1 className='text-3xl font-bold'>Home Component</h1>
     {/* <Counter name="New Counter"/>

     <hr className='my-8' /> */}

     {/* <OldCounter name="Old Counter"/> */}

     <ClickCounter name="Click Counter"/>

     <HoverCounter name="Hover Counter"/>
    </>
   
    
  )
}
