import React from 'react'
import { Link, withRouter } from 'react-router-dom'

import './RouteNavbar.scss'

const RouteNavbar = (props) => {
    return (
        <nav id='route-navbar-tabs'>
            {
                props.tabs.map((tab, index) => {
                    const link = tab.split('').map((letter) => letter === ' ' ? '-' : letter).join('').toLowerCase()

                    return <Link to={link === 'home' ? '/' : link} key={`${tab}+${index}`}><p className='route-navbar-tab'>{tab}</p></Link>
                })
            }
        </nav>
    )
}

export default withRouter(RouteNavbar)