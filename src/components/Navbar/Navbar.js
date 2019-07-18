import React from 'react'
import { Link, withRouter } from 'react-router-dom'

import cart from './../../assets/images/Cart/shoppingCart.png'

import './Navbar.scss'

const Navbar = (props) => {
    return (
        <div id='navbar-tabs'>
            {
                props.tabs.map((tab, index) => {
                    if (tab !== 'Cart') {
                        return <p key={`${tab}+${index}`}>{ tab }</p>
                    }
                    return <p><img src={cart} alt='Cart'/></p>
                })
            }
        </div>
    )
}

export default withRouter(Navbar)