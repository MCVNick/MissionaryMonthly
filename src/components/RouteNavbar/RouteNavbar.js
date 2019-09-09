import React from 'react'
import { Link, withRouter } from 'react-router-dom'

import './RouteNavbar.scss'

const RouteNavbar = (props) => {
    return (
        <div id='route-navbar-tabs'>
            {
                props.tabs.map((tab, index) => {
                    const link = tab.split('').filter((letter) => letter !== ' ').join('')

                    return <Link to={link} key={`${tab}+${index}`}><p>{tab}</p></Link>
                })
            }
        </div>
    )
}

export default withRouter(RouteNavbar)