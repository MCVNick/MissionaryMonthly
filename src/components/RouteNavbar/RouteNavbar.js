import React from 'react'
import { Link, withRouter } from 'react-router-dom'

import cart from './../../assets/images/Cart/shoppingCart.png'

import './RouteNavbar.scss'

const RouteNavbar = (props) => {
    return (
        <div id='route-navbar-tabs'>
            {
                props.tabs.map((tab, index) => {
                    const link = tab.split('').filter((letter) => letter !== ' ').join('')

                    if (tab !== 'Cart') {
                        return <Link to={link}><p key={`${tab}+${index}`}>{tab}</p></Link>
                    }
                    return <Link to={link}><p><img src={cart} alt='Cart' /></p></Link>
                })
            }
        </div>
    )
}

export default withRouter(RouteNavbar)