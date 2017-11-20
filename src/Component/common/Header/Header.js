import React from 'react'
import './Header.css'

export default function Header(props){
    return (
        <header className='header'>
            <div className='search'>搜索商品，了解更多</div>
            <div className='notice'><span>99</span></div>
        </header>
    )
}
