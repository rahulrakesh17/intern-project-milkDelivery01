import React from 'react'
import "./Musttry.css"
import { useContext,useState } from 'react'
import { contextApi } from '../../context/Context'



function MusttryContent() {
  const useContextApi = useContext(contextApi);

  const [products,setProducts] = useState([...useContextApi.products])
  console.log()
  return(
    useContextApi.products.length>0 && 
    useContextApi.products.map((item,index) => {
        return(
            <div className="col-lg-4 my-card">
                <img className="rounded-circle" src={item.imgUrl} alt="Generic placeholder image" width="140" height="140"/>
                <h3>{item.title}</h3>
                <p><a className="btn btn-secondary" href="#" role="button">View details »</a></p>
            </div>
        
        )
    })
  )

}

export default MusttryContent