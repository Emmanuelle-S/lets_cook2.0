// import { useState } from 'react'
import './App.css'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import Recipes from './components/Recipes/Recipes'
import Search from './components/Search/Search'

function App() {
  

  return (
    <>
    <Header/>
    <h1 className='my-4 text-6xl text-red-600'>Let's Cook</h1>
    <Search/>
    <Recipes/>
    <Footer/>
    </>
  )
}

export default App
