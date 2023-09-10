import React from 'react'
import Header from '../components/Header/Header'
import Carousel from '../components/Carousel/Carousel'
import Musttry from '../components/mustTry/Musttry'
const Home=()=> {
  return (
    <div className='container-fluid' style={{"padding":0}}>
        <Header/>
        <Carousel/>
        <Musttry/>
    </div>
  )
}

export default Home ;