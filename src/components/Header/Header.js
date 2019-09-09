import React from 'react'

import './Header.scss'

const Header = (props) => {
    return (
        <h1 id='page-header'>{props.name}</h1>
    )
}

export default Header