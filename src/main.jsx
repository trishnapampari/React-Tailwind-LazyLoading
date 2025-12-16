import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Home from './components/Home.jsx'
import { lazy } from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const About=lazy(()=>wait(1000).then(()=>import('./components/About.jsx')))

//if default export is not there use this syntax
// const About=lazy(()=>wait(1000).then(()=>import('./components/About.jsx').then((module)=>({default:module.About}))))

const router= createBrowserRouter([{
  path:'/',
  element:<App />,
  children :[
    {
      path:'/home',
      element: <Home />
    },
     {
      path:'/about',
      element: <About />
    },
     {
      path:'/contact',
      element: <Contact />
    }

  ]
}])

const wait=(time) =>{
return new Promise((resolve)=>{
  setTimeout(()=>{
    resolve()
  },time)
})
}

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
