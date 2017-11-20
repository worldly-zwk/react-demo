import React,{Component} from 'react'

export default class FloorContainer extends Component{
	constructor(props){
		super(props)
	}
    render(){
        return (
            <div className='floor-container'>
                <h2 className='home-title'>
                    <span></span>
                    <p>{this.props.list.title}</p>
                    <span></span>
                </h2>
                <div className='advertisement'>
                    <img src={this.props.list.advertisement} alt=''/>
                </div>
                <div className='container'>
                    <ul>

                    </ul>
                </div>
            </div>
        )
    }
}
