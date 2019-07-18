import React from 'react'

import './Header.scss'

const Header = (props) => {
    return (
        <div id='page-header'>{props.name}</div>
    )
}

export default Header