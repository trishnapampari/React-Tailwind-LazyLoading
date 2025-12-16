import { Suspense, useState } from 'react'

import './App.css'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <main className='py-4 px-4 md:px-8'>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </main>
  
    </>
  )
}

export default App
