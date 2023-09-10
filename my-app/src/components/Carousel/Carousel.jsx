import "./Carousel.css"
import React from 'react'
import { useContext ,useState} from "react"
import { contextApi } from "../../context/Context"
import {BsArrowLeftCircle,BsArrowRightCircle} from "react-icons/bs"

function Carousel() {
        const useContextApi = useContext(contextApi);
        const [slide,setSlide]=useState(0)
        console.log(useContextApi.carouselData.slides)
        return(
            // <div className="carousel">
            //     <BsArrowLeftCircle className="arrow arrow-left"/>
            //     {useContextApi.carouselData.slides.map((item,index)=>{
            //         return(
            //             <img src={item.src} alt={item.alt} key={index} className={slide===index ? "slides" : "slides slide-hidden"}/>
            //         )
            //     })}
            //     <BsArrowRightCircle className="arrow arrow-right"/>
            //     <span className="indicators">
            //         {useContextApi.carouselData.slides.map((_, idx) => {
            //             return (
            //                 <button key={idx} onClick={null} className={slide ===idx ? "indicator": "indicator indicator-inactive"}></button>
            //                 )
            //         })}
            //     </span>
            // </div>
            <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="10000">
                <img src="https://as2.ftcdn.net/v2/jpg/05/55/08/33/1000_F_555083313_cUE9ZkxjCiKUGeDJVLpU4ASK7YHZUAaj.jpg" class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                <img src="https://as1.ftcdn.net/v2/jpg/01/77/90/64/1000_F_177906490_q9u2nhqrFo1PnCa9kKANv3Nz8us7Aihq.jpg" class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                <img src="https://as2.ftcdn.net/v2/jpg/02/06/16/89/1000_F_206168912_rXefAXZAR4btpM0QVX8h7tfQIzCP6Seo.jpg" class="d-block w-100" alt="..."/>
                </div>
            </div>
            <div class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                <BsArrowLeftCircle class="arrow arrow-left"/>
            </div>
            <div class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                 <BsArrowRightCircle className="arrow arrow-right"/>
            </div>
</div>

        )
}

export default Carousel