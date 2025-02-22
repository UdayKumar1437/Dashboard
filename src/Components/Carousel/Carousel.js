import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import slide1 from "../../assets/Slidev3_01.png"
import slide2 from "../../assets/Slidev3_02.png"
import slide3 from "../../assets/Slidev3_03.png"
import slide4 from "../../assets/Slidev3_05.png"

const CarouselTest = () => {
  return (
    <Carousel showThumbs={false}>
                <div>
                    <img src={slide1} />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                    <img src={slide2} />
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div>
                    <img src={slide3} />
                    {/* <p className="legend">Legend 3</p> */}
                </div>
                <div>
                    <img src={slide4} />
                    {/* <p className="legend">Legend 3</p> */}
                </div>
            </Carousel>
  )
}

export default CarouselTest