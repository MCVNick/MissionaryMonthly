import React from 'react'
import { Link, withRouter } from 'react-router-dom'

import { useAuth0 } from '../Auth0/react-auth0-wrapper'

import cart from './../../assets/images/Cart/shoppingCart.png'
import facebookIcon from './../../assets/icons/facebook.png'
// import pintristIcon from './../../assets/icons/pintrist.png'
// import instagramIcon from './../../assets/icons/instagram.png'

import './UserNavbar.scss'

const UserNavbar = (props) => {
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    return (
        <div id='user-navbar-tabs'>
            <a href="https://www.facebook.com/MissionaryMonthly"><img src={facebookIcon} alt='Facebook' className='user-navbar-social-button-last' /></a>
            {/* <a href="https://www.facebook.com/MissionaryMonthly"><img src={pintristIcon} alt='Pintrist'/></a> */}
            {/* <a href="https://www.facebook.com/MissionaryMonthly"><img src={instagramIcon} alt='Instagram'/></a> */}
            {
                !isAuthenticated && (
                    <button
                        className='user-navbar-words'
                        onClick={() => loginWithRedirect({})
                        }>
                        Login
                    </button>
                )
            }
            {isAuthenticated && <button className='user-navbar-words' onClick={() => logout()}>Logout</button>}
            <Link to='Cart'><img src={cart} alt='Cart' className='user-navbar-cart-icon' /></Link>
        </div>
    )
}

export default withRouter(UserNavbar)