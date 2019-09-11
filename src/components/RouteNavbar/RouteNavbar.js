import React from 'react'
import { Link, withRouter } from 'react-router-dom'

import './RouteNavbar.scss'

const RouteNavbar = (props) => {
    return (
        <nav id='route-navbar-tabs'>
            {
                props.tabs.map((tab, index) => {
                    const link = tab.split('').filter((letter) => letter !== ' ').join('')

                    return <Link to={link} key={`${tab}+${index}`}><p className='route-navbar-tab'>{tab}</p></Link>
                })
            }
        </nav>
    )
}

export default withRouter(RouteNavbar)