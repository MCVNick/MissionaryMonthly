import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import One from './../../assets/images/One.png'
import Two from './../../assets/images/HomeCarousel/Two.png'
import Three from './../../assets/images/HomeCarousel/Three.png'
import Four from './../../assets/images/HomeCarousel/Four.png'
import Five from './../../assets/images/HomeCarousel/Five.png'

const HomeCarousel = () => {
    return(
        <Carousel 
          className='home-carousel'
          showStatus={false}
          infiniteLoop={true}
          selectedItem={2}
          useKeyboardArrows={true}
          autoPlay={true}
          interval='3000'>
            <div>
                <img src={One} alt=""/>
            </div>
            <div>
                <img src={Two} alt=""/>
            </div>
            <div>
                <img src={Three} alt=""/>
            </div>
            <div>
                <img src={Four} alt=""/>
            </div>
            <div>
                <img src={Five} alt=""/>
            </div>
        </Carousel>
    )
}

export default HomeCarousel