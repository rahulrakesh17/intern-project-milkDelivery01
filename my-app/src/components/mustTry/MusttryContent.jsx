import React from 'react'
import "./Musttry.css"
import { useContext,useState } from 'react'
import { contextApi } from '../../context/Context'



function MusttryContent() {
  const useContextApi = useContext(contextApi);

  const [products,setProducts] = useState([...useContextApi.products])
  console.log(useContextApi.products)
  return(
    useContextApi.products.length>0 && 
    useContextApi.products.map((item,index) => {
      if(item.mustTry===true){
        return (
          <div className="col-lg-4 ">
              <div className='my-card'><img className="rounded-circle" src={item.imgUrl} alt="Generic placeholder image" width="140" height="140"/></div>
              <div className='my-card title'><h3 style={{textAlign:"center",fontSize:"small"}}>{item.title}</h3></div>
              <div className='my-card price'><p style={{textAlign:"center"}}>₹{item.price}</p></div>
              
              <div className='row' key={index}>
                <div className='col-12'>
                  <div className='row'>
                    <div className='col-10'>
                      <img src={item.imgUrl} alt={item.title} />
                    </div>
                  </div>
                </div>
              </div>

              </div>
          
      
      )
      }
        
    })
  )

}

export default MusttryContent