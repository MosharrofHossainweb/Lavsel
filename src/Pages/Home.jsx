import React from 'react'
import Navbar from '../Component/Navber/Navber'
import Banner from '../Component/banner/Banner'
import Feature from '../Component/Features/Feature'
import Plan from '../Component/Plan/Plan'
import Network from '../Component/Network/Network'
import Customer from '../Component/Customer/Customer'
import Footer from '../Component/Footer/Footer'

const Home = () => {
  return (
    <>
      <Navbar/>
      <Banner/>
      <Feature/>
      <Plan/>
      <Network/>
      <Customer/>
      <Footer/>
    </>
  )
}

export default Home
