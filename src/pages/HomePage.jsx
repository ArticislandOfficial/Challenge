import React from 'react'
import "../styles/style.css";
import Contenido from '../components/Contenido'
import Footer from '../components/Footer'
import Header from '../components/Header'

const HomePage = () => {
  return (

    <div>
        <Header />
        <Contenido/>
        <Footer/>
    </div>
  )
}

export default HomePage