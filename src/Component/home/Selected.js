import React,{Component} from 'react'

export default class Selected extends Component{
    constructor(props){
        super(props);
    }
    render (){
        return (
            <div className='selected'>
                <h2 className='home-title'>
                    <span></span>
                    <p>易家精选</p>
                    <span></span>
                </h2>
                <div className='selected-content'>
                    <div className='first'><img src='' /></div>
                    <div className='second'><img src='' /></div>
                    <div className='last'><img src='' /></div>
                </div>
            </div>
        )
    }
}
