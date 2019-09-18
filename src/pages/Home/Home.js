import React from 'react'
import Carousel from "./../../components/HomeCarousel/HomeCarousel";

import './Home.scss'

const Home = () => {
    return (
        <main id='home-page'>
            <h1>Products</h1>
            <Carousel />
        </main>
    )
}

export default Home;