import React from 'react'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className = "overflow-x-hidden text-stone-300 antialiased">
        <div className="fixed inset-0 -z-10">
        <div class="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"></div>
        <div className="container mx-auto px-8"></div>
        <Navbar></Navbar>
        </div>
    </div>
  )
}

export default App
