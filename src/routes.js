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
        <Suspense fallback={<div>Loading...</div>}>
            <Route exact path='/' component={Home}/>
            <Route path='/Home' component={Home}/>
            <Route path='/Shop' component={Shop}/>
            <Route path='/AboutUs' component={AboutUs}/>
            <Route path='/Contact' component={Contact}/>
            <Route path='/More' component={More}/>
            <Route path='/Cart' component={Cart}/>
        </Suspense>
    </Switch>
)