import React,{Component} from 'react'

export default class Swiper extends Component{
    render(){
        let mystyle={height:'4rem'};
        return (
            <div className='swiper-container' ref='swiper' style={mystyle}>
                <div className='swiper-wrapper'>
                    {this.props.data.map((val,ind)=><div className='swiper-slide' key={ind}><img src={val} alt=''/></div>)}
                </div>
                <div className='swiper-pagination'></div>
            </div>
        )
    }
    componentDidMount(){
        new window.Swiper('.swiper-container',{
            autoplay: 4000,
            pagination: ".swiper-pagination",
            bulletClass: "home-pagination-bullet",
            bulletActiveClass: "home-pagination-bullet-active"
        })
    }
}
