import React from 'react'
import { Link, withRouter } from 'react-router-dom'

import { useAuth0 } from '../Auth0/react-auth0-wrapper'

import facebookIcon from './../../assets/icons/facebook.png'
import pintristIcon from './../../assets/icons/pintrist.png'
import instagramIcon from './../../assets/icons/instagram.png'

import './UserNavbar.scss'

const UserNavbar = (props) => {
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    return (
        <nav id='user-navbar-tabs'>
            <a href='https://www.facebook.com/MissionaryMonthly'><img src={facebookIcon} alt='Facebook' className='user-navbar-image-button' /></a>
            <a href="https://www.pinterest.com/oleachidester/"><img src={pintristIcon} alt='Pintrist' className='user-navbar-image-button'/></a>
            <a href="https://www.instagram.com/MissionaryMonthly"><img src={instagramIcon} alt='Instagram' className='user-navbar-image-button'/></a>
            <h3>|</h3>
            {
                !isAuthenticated && (
                    <div className='sign-in-register'>
                        <h1
                            onClick={() => loginWithRedirect({})
                            }>
                            Sign In
                        </h1>
                        <h2>
                            or
                        </h2>
                        <h1
                            onClick={() => loginWithRedirect({})
                            }>
                            Register
                        </h1>
                    </div>
                )
            }
            {isAuthenticated && <button onClick={() => logout()}>Logout</button>}
            <Link to='Cart'><h1>Cart</h1></Link>
        </nav>
    )
}

export default withRouter(UserNavbar)