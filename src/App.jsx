import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import Features from './components/Features/Features'
import Project from './components/Project/Project'
import Contact from './components/Contact/Contact'


const App = () => {
  return (
    <div className='w-full h-auto bg-bodyColor text-lightText'>
      <div className='max-w-screen-xl mx-auto p-4 lgl:p-0'>
        <Navbar/>
        <Banner/>
        <Features/>
        <Project/>
        <Contact/>
      </div>
      
 
    </div>
  )
}

export default App