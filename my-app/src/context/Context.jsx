import React from 'react'
import {useState ,useEffect ,createContext,useRef} from "react"
import data from "../data/CarouselData.json"
const contextApi = createContext();

const Contextprovider=({children})=>{
  const [carouselData,setCarouselData]=useState(data);


  const [SideNav,setSideNav]=useState(false)
  const handleSideNav=()=>{
    setSideNav(!SideNav)
  }

  return(
    <contextApi.Provider value={{
      handleSideNav,
      SideNav,
      carouselData,

    }}>{children}</contextApi.Provider>
  )
}

export {contextApi,Contextprovider}