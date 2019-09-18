import React from 'react';
import Slider from 'react-slick';
import Item from './../HomeCarouselItem/HomeCarouselItem'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HomeCarousel.scss"

const HomeCarousel = () => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 3000,
    }
    return(
        <section id='home-carousel'>
            <Slider {...settings}>
                <Item name="necessities-side" />
                <Item name="cinnamon-side" />
                <Item name="irish-side" />
                <Item name="bunny-side" />
                <Item name="fiesta-side" />
                <Item name="water-side" />
                <Item name="fourth-side" />
                <Item name="melon-side" />
                <Item name="bee-side" />
                <Item name="trick-side" />
                <Item name="pumpkin-side" />
                <Item name="claus-side" />
                <Item name="birthday-side" />
                <Item name="pink-side" />
            </Slider>
        </section>
    )
}

export default HomeCarousel