import "./Carousel.css"
import React from 'react'
import { useContext } from "react"
import { contextApi } from "../../context/Context"

function Carousel() {
        const useContextApi = useContext(contextApi);
        console.log(useContextApi.carouselData.slides)
        return(
            <div className="carousel">
                {useContextApi.carouselData.slides.map((item,index)=>{
                    return <img src={item.src} alt={item.alt} key={index} className="slide"/>
                })}
            </div>

        )
}

export default Carousel