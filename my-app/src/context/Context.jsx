import React from 'react'
import firebaseConfig from '../firebase/firebase'; 
import {initializeApp} from "firebase/app";
import {collection ,getDocs, doc, addDoc,deleteDoc, getFirestore} from "firebase/firestore"
import {useState ,useEffect ,createContext,useRef} from "react"
import data from "../data/CarouselData.json"
const contextApi = createContext();

const  Contextprovider=  ({children})=>{
  const [carouselData,setCarouselData]=useState(data);
  const [SideNav,setSideNav]=useState(false)
  const handleSideNav=()=>{
    setSideNav(!SideNav)
  }
   
  initializeApp(firebaseConfig)
  const db = getFirestore();
  const colRef = collection(db,"products");
  const [products,setProducts]=useState([])
  
  useEffect(() => {
    getDocs (colRef)
    .then((snapshot)=> {
      const productData = [];
      snapshot.forEach((doc) => productData.push({ ...doc.data(), id: doc.id }));
      setProducts(productData);
    });
  }, []);
  console.log(products)
  return(
    <contextApi.Provider value={{
      handleSideNav,
      SideNav,
      carouselData,
      products

    }}>{children}</contextApi.Provider>
  )
}

export {contextApi,Contextprovider}