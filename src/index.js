import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {BrowserRouter,Route} from 'react-router-dom'

import store from './store'
import Footer from './Component/common/Footer/Footer'
import Home from './Component/home/Home'

import './index.css'

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div className='wrapper'>
                <Route path='/' exact component={Home}></Route>
                {/* <Route path='/classify' Component={Home}></Route> */}
                {/* <Route path='/cart' Component={Home}></Route> */}
                {/* <Route path='/user' Component={Home}></Route> */}
                <Footer></Footer>
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
)
