import React from 'react'
import {useState ,useEffect ,createContext,useRef} from "react"


const contextApi = createContext();

const Contextprovider=({children})=>{
  const [SideNav,setSideNav]=useState(false)
  const handleSideNav=()=>{
    setSideNav(!SideNav)
  }

  return(
    <contextApi.Provider value={{
      handleSideNav,
      SideNav

    }}>{children}</contextApi.Provider>
  )
}

export {contextApi,Contextprovider}