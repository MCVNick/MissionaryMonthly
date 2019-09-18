import React from 'react'

import "./HomeCarouselItem.scss"

const buildName = (name) => {
    if (name.includes('-side')) {
        name = name.split('-side').join('').split('')
        name[0] = name[0].toUpperCase()
        name = name.join('')
    }
    else {
        name = name.split('')
        name[0] = name[0].toUpperCase()
        name = name.join('')
    }
    return name
}

const HomeCarouselItem = ({name}) => {
    const link = require(`./../../assets/images/Products/${name}.jpg`)

    return (
        <div className='home-carousel-item'>
            <img src={link} alt={name}/>
            <h1 className='carousel-item-header'>{buildName(name)}</h1>
        </div>
    )
}

export default HomeCarouselItem