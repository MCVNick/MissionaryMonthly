import React from 'react'
import { Link } from 'react-router-dom'

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

const HomeCarouselItem = ({name, showAdditions = true}) => {
    const link = require(`./../../assets/images/Products/${name}.jpg`)

    return (
        <div className='home-carousel-item'>
            <div>
                {showAdditions && <Link to={`${buildName(name).toLowerCase()}`}><img src={link} alt={name}/></Link>}
                {showAdditions &&
                    <article>
                        <button>Quick View</button>
                        <button>Add to Cart</button>
                    </article>
                }
                {
                    !showAdditions && <img src={link} alt={name}/>
                }
            </div>
            {showAdditions && <h1 className='carousel-item-header'>{buildName(name)}</h1>}
        </div>
    )
}

export default HomeCarouselItem