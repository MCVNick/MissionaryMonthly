import React from 'react'
import { Link, withRouter } from 'react-router-dom'

import './UserNavbar.scss'

const UserNavbar = (props) => {
    return (
        <div id='navbar-tabs'>
            <Link to='/Login'>Login</Link>
            <Link to='/Register'>Register</Link>
        </div>
    )
}

export default withRouter(UserNavbar)