import React from 'react'
import Carousel from "./../../components/HomeCarousel/HomeCarousel";

import './Home.scss'

const Home = () => {
    return (
        <main className='home-page'>
            <Carousel />

            <p>You need to decide what you want this to say here, and decide what goes in the carousel.</p>
            <p>Also you will want to tell me what image you want behind MissionaryMonthly.com</p>
        </main>
    )
}

export default Home;