import React from 'react'

import SocialButtons from '../SocialButtons/SocialButtons'

import './Footer.scss'

const Footer = () => {
    return (
        <footer id='page-footer'>
            <div className='footer-content'>
                <h1>Connect</h1>
                <SocialButtons />
                <section>
                    <article>
                        <h1>Navigate</h1>
                        <h2>Home</h2>
                        <h2>Shop</h2>
                        <h2>About Us</h2>
                        <h2>Contact</h2>
                        <h2>More</h2>
                    </article>
                    <article>
                        <h1>Categories</h1>
                        <h2>Hollidays</h2>
                        <h2>Seasons</h2>
                        <h2>Everyday</h2>
                        <h2>Celebrate</h2>
                    </article>
                    <article>
                        <h1>Info</h1>
                        <h2>missionarymonthly@gmail.com</h2>
                        <h2>(385) 282-3858</h2>
                    </article>
                    {/* <article>
                        <h1>Newsletter</h1>
                        <input placeholder="Your email address"/>
                        <button>Subscribe</button>
                    </article> */}
                </section>
                <h2>© 2019 MissionaryMonthly.com</h2>
            </div>
        </footer>
    )
}

export default Footer