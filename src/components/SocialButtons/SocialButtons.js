import React from 'react'

import './SocialButtons.scss'

import facebookIcon from './../../assets/icons/facebook.png'
import pintristIcon from './../../assets/icons/pintrist.png'
import instagramIcon from './../../assets/icons/instagram.png'

const SocialButtons = () => {
    return (
        <article className='social-buttons'>
            <a href='https://www.facebook.com/MissionaryMonthly'><img src={facebookIcon} alt='Facebook' className='user-navbar-image-button' /></a>
            <a href="https://www.pinterest.com/oleachidester/"><img src={pintristIcon} alt='Pintrist' className='user-navbar-image-button'/></a>
            <a href="https://www.instagram.com/MissionaryMonthly"><img src={instagramIcon} alt='Instagram' className='user-navbar-image-button'/></a>
        </article>
    )
}

export default SocialButtons