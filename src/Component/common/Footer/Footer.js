import React from 'react'
import {Link} from 'react-router-dom'
import './Footer.css'
export default function Footer(props) {
    return (
        <footer className='footer retainbt'>
            <ul>
                <li>
                    <Link to='/'><div><i></i><p>首页</p></div></Link>
                </li>
                <li>
                    <Link to='/classify'><div><i></i><p>分类</p></div></Link>
                </li>
                <li>
                    <Link to='/cart'><div><i></i><p>购物车</p></div></Link>
                </li>
                <li>
                    <Link to='/user'><div><i></i><p>我的</p></div></Link>
                </li>
            </ul>
        </footer>
    )
}
