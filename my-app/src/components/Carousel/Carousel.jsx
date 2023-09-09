import "./Carousel.css"
import React from 'react'

function Carousel() {
  return (<>
  
            <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="10000">
                <img src="https://media.istockphoto.com/id/1297005860/photo/raw-milk-being-poured-into-container.jpg?s=612x612&w=0&k=20&c=5Xumh49_zYs9GjLkGpZXM41tS17K8M-svN9jLMv0JpE=" class="carousel-img d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                <img src="https://media.istockphoto.com/id/1171812310/photo/young-woman-drinking-milk.jpg?s=612x612&w=0&k=20&c=53AP4la-uLmdEmuAF1Rm-vHmCYWtDRIaXAgIbaHXC4c="  class="carousel-img d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                <img src="https://media.istockphoto.com/id/1297005217/photo/farmer-pouring-raw-milk-into-container.jpg?s=612x612&w=0&k=20&c=toiruwu04HHkwnLZhpKEjNPqOHI7Kmut5NMGTFSGm4M="  class="carousel-img d-block w-100" alt="..."/>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
        </>
  )
}

export default Carousel