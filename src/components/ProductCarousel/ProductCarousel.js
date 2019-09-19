import React, { createRef, useEffect, useState } from 'react';
import Slider from 'react-slick';
import { withRouter } from 'react-router-dom'
import Item from './../HomeCarouselItem/HomeCarouselItem'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './ProductCarousel.scss'

const ProductCarousel = ({name}) => {
    const [slider1, setSlider1] = useState()
    const [slider2, setSlider2] = useState()

    let sliderFor = createRef()
    let sliderNav = createRef()

    let sliderForSettings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
    }
    let sliderNavSettings = {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
        focusOnSelect: true,
    }

    useEffect(() => {
        setSlider1(sliderFor.current)
        setSlider2(sliderNav.current)
    }, [sliderFor, sliderNav])

    return(
        <section id='product-carousel'>
            <Slider ref={sliderFor} className='slider-for' asNavFor={slider2} {...sliderForSettings}>
                <Item name={`${name}-side`} showAdditions={false}/>
                <Item name={`${name}`} showAdditions={false}/>
            </Slider>
            <Slider ref={sliderNav} className='slider-nav' asNavFor={slider1} {...sliderNavSettings}>
                <Item name={`${name}-side`} showAdditions={false}/>
                <Item name={`${name}`} showAdditions={false}/>
            </Slider>
        </section>
    )
}

export default withRouter(ProductCarousel)