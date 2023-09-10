import React from 'react'
import "./Musttry.css"
import { useContext,useState } from 'react'
import { contextApi } from '../../context/Context'
import MusttryHead from './MusttryHead'
import MusttryContent from './MusttryContent'


function Musttry() {
  
  return (
    <>
     <MusttryHead/>
     <div className='container mt-5'>
            <div className="row">
            <MusttryContent/>
            </div>
        </div>
     
    </>
   

  )
}

export default Musttry