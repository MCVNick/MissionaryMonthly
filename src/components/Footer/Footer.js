import React from 'react'
import {Link} from 'react-router-dom'

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
                        <Link to='/home'><h2>Home</h2></Link>
                        <Link to='/shop'><h2>Shop</h2></Link>
                        <Link to='/about-us'><h2>About Us</h2></Link>
                        <Link to='/contact'><h2>Contact</h2></Link>
                        <Link to='/more'><h2>More</h2></Link>
                    </article>
                    {/* <article>
                        <h1>Categories</h1>
                        <h2>Hollidays</h2>
                        <h2>Seasons</h2>
                        <h2>Everyday</h2>
                        <h2>Celebrate</h2>
                    </article> */}
                    <article>
                        <h1>Contact Info</h1>
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