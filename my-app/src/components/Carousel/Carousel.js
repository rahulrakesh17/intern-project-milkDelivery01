import "./Carousel.css"
import React from 'react'

function Carousel() {
        let slideIndex = 1;
        showSlides(slideIndex);

        // Next/previous controls
        function plusSlides(n) {
        showSlides(slideIndex += n);
        }

        // Thumbnail image controls
        function currentSlide(n) {
        showSlides(slideIndex = n);
        }

        function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            if(slides[i]){
                slides[i].style.display = "none";
            }
            
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        if(slides[slideIndex-1]){
            slides[slideIndex-1].style.display = "block";
        }
        
        dots[slideIndex-1].className += " active";
        }
  return (
            
        <div className="slideshow-container">
            <div className="mySlides fade">
                <img src="https://img.freepik.com/premium-vector/rural-landscape-splash-milk-poster-with-liquid-milky-drops-outdoor-scenery-with-cows_1284-56297.jpg?w=1060" className="carousel-img"/>
                <div className="text">Caption Text</div>
            </div>

            <div className="mySlides fade">
                <img src="https://img.freepik.com/free-vector/cow-with-black-spots-with-meadow-background-organic-fresh-milk_1268-15852.jpg?w=1380&t=st=1694268994~exp=1694269594~hmac=5cfa269d53b39a982799de5cc058f72e73d75a479c50304d8736eba8a5fbf656" className="carousel-img" />
                <div className="text">Caption Two</div>
            </div>

            <div className="mySlides fade">
                <img src="https://img.freepik.com/free-vector/realistic-cheese-ads-horizontal-poster-fresh-cheese-fresh-farm-headline-village-landscape-vector-illustration_1284-78410.jpg?w=1380&t=st=1694268962~exp=1694269562~hmac=c25fec2d6a1e94bb076b763f7063b729ccdb23914445076802c8043cb4c1ed47" className="carousel-img" />
                <div className="text">Caption Three</div>
            </div>
            <a className="prev" onClick={plusSlides(-1)}>&#10094;</a>
            <a className="next" onClick={plusSlides(1)}>&#10095;</a>
    </div>
  )
}

export default Carousel