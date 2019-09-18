import React from 'react'
import { Link, withRouter } from 'react-router-dom'

import { useAuth0 } from '../Auth0/react-auth0-wrapper'
import SocialButtons from '../SocialButtons/SocialButtons'

import './UserNavbar.scss'

const UserNavbar = (props) => {
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    return (
        <nav id='user-navbar-tabs'>
            <SocialButtons />
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