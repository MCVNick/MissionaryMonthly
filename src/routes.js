import React, {Suspense, lazy } from 'react'
import { Switch, Route } from 'react-router-dom'

const Home = lazy(() => import('./pages/Home/Home'))

export default (
    <Switch>
        <Suspense fallback={<div>Loading...</div>}>
            <Route exact path='/' component={Home}/>
        </Suspense>
    </Switch>
)