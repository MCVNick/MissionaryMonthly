import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import necessities from './../../assets/images/Products/necessities-side.jpg'
import cinnamon from './../../assets/images/Products/cinnamon-side.jpg'
import irish from './../../assets/images/Products/irish-side.jpg'
import bunny from './../../assets/images/Products/bunny-side.jpg'
import fiesta from './../../assets/images/Products/fiesta-side.jpg'
import water from './../../assets/images/Products/water-side.jpg'
import fourth from './../../assets/images/Products/fourth-side.jpg'
import melon from './../../assets/images/Products/melon-side.jpg'
import bee from './../../assets/images/Products/bee-side.jpg'
import trick from './../../assets/images/Products/trick-side.jpg'
import pumpkin from './../../assets/images/Products/pumpkin-side.jpg'
import claus from './../../assets/images/Products/claus-side.jpg'
import pink from './../../assets/images/Products/pink-side.jpg'
import birthday from './../../assets/images/Products/birthday-side.jpg'

const HomeCarousel = () => {
    return(
        <Carousel 
          className='home-carousel'
          showStatus={false}
          infiniteLoop={true}
          selectedItem={0}
          useKeyboardArrows={true}
          autoPlay={true}
          interval={3000}>
            <div><img src={necessities} alt=""/></div>
            <div><img src={cinnamon} alt=""/></div>
            <div><img src={irish} alt=""/></div>
            <div><img src={bunny} alt=""/></div>
            <div><img src={fiesta} alt=""/></div>
            <div><img src={water} alt=""/></div>
            <div><img src={fourth} alt=""/></div>
            <div><img src={melon} alt=""/></div>
            <div><img src={bee} alt=""/></div>
            <div><img src={trick} alt=""/></div>
            <div><img src={pumpkin} alt=""/></div>
            <div><img src={claus} alt=""/></div>
            <div><img src={pink} alt=""/></div>
            <div><img src={birthday} alt=""/></div>
        </Carousel>
    )
}

export default HomeCarousel