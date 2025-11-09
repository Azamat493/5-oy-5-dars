import React from 'react'
import Header from './components/Header'
import Showcase from './components/Showcase'
import Community from './components/Community'
import Brands from './components/Brands'
import Service from './components/Service'
import Safe from './components/Safe'
import Footer from './components/Footer'
import Cars from './components/Cars'

const App = () => {
  return (
    <div>
      <Header/>
      <Showcase/>
      <Cars/>
      <Community/>
      <Brands/>
      <Service/>
      <Safe/>
      <Footer/>
    </div>
  )
}

export default App