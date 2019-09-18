import React, {Suspense, lazy } from 'react'
import { Switch, Route } from 'react-router-dom'

const Home = lazy(() => import('./pages/Home/Home'))
const Shop = lazy(() => import('./pages/Shop/Shop'))
const AboutUs = lazy(() => import('./pages/AboutUs/AboutUs'))
const Contact = lazy(() => import('./pages/Contact/Contact'))
const More = lazy(() => import('./pages/More/More'))
const Cart = lazy(() => import('./pages/Cart/Cart'))

export default (
    <Switch>
        <Suspense fallback={<main>Loading...</main>}>
            <Route exact path='/' component={Home}/>
            <Route path='/home' component={Home}/>
            <Route path='/shop' component={Shop}/>
            <Route path='/about-us' component={AboutUs}/>
            <Route path='/contact' component={Contact}/>
            <Route path='/more' component={More}/>
            <Route path='/cart' component={Cart}/>
        </Suspense>
    </Switch>
)