import React from 'react'
import {Link} from 'react-router-dom'

import './Header.scss'

const Header = () => {
    return (
        <Link to='/' id='page-header'>
            <h1>Missionary Monthly</h1>
            <h3>Helping you send </h3>
            <h2>Love monthly</h2>
            <h3>With themed boxes</h3>
        </Link>
    )
}

export default Header