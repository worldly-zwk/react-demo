import React,{Component} from 'react'
import {Link} from 'react-router-dom'

import './Tab.css'

export default class Tab extends Component{
    render (){
        return (
            <nav className='nav' ref='nav'>
                <ul>
                    {this.props.tabs.map((val,ind)=><li key={val.type}><Link to={val.link}>{val.text}</Link></li>)}
                </ul>
                <div className='navAll'></div>
            </nav>
        )
    }
    componentDidMount(){
        var lis=this.refs.nav.getElementsByTagName("li"),
            liW=lis[0].clientWidth;
        var ul=this.refs.nav.getElementsByTagName("ul")[0];
        ul.style.width=liW*lis.length+35+"px";
        setTimeout(()=>{
            new window.IScroll(this.refs.nav,{
                scrollX:true,
                scrollY:false
            })
        })
    }
}
