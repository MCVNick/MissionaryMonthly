import React from 'react'
import { Link } from 'react-router-dom'
import Carousel from '../../components/ProductCarousel/ProductCarousel'

import './Product.scss'

const Product = ({location}) => {
    let { pathname: product } = location
    product = product.split('').filter((letter) => letter !== '/' && letter).join('')
    let link

    try {
        link = require(`./../../assets/images/Products/${product.toLowerCase()}.jpg`)
    }
    catch {
        link = '404'
    }

    return (
        link !== '404' ?
        <main id='product-page'>
            <article className='product-nav'>
                <Link to='/'><h1>Home</h1></Link>
                <h1>/</h1>
                <Link to='/Shop'><h1>Shop</h1></Link>
                <h1>/</h1>
                <h1>{product.charAt(0).toUpperCase() + product.substring(1)}</h1>
            </article>
            <section>
                <Carousel name={product}/>
            </section>
        </main>
        :
        <main>OOF</main>
    )
}

export default Product;