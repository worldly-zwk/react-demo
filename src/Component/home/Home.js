import React,{Component} from 'react'
import Header from '../common/Header/Header'
import Tab from '../common/Tab/Tab'
import Swiper from '../common/Swiper/Swiper'
import Selected from './Selected'
import FloorContainer from './FloorContainer'
import './home.css'

export default class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            banders:[
                "http://oss.citic-mall.com/90125d51-c189-4712-b38b-96db4041a26b",
                "http://oss.citic-mall.com/37e86dae-3f58-4b16-84e5-36f3e9726e16",
                "http://oss.citic-mall.com/55e5caed-1d9c-4d41-a7ce-75f1bb08313e",
                "http://oss.citic-mall.com/0c87d2f6-3688-492d-a15b-2d17068e5e3c",
                "http://oss.citic-mall.com/b8d21a89-ff83-43e7-83da-de0157e17c12"
            ],
            Tabs:[
                {type:"jingxuan",text:"精选",link:"/"},
                {type:"gehu",text:"个护",link:"/"},
                {type:"caizhuang",text:"彩妆",link:"/"},
                {type:"dianzi",text:"电子",link:"/"},
                {type:"haowu",text:"好物",link:"/"},
                {type:"jujia",text:"居家",link:"/"},
                {type:"meishi",text:"美食",link:"/"},
                {type:"gehu1",text:"精选",link:"/"},
                {type:"jingxuan1",text:"个护",link:"/"},
                {type:"caizhuang1",text:"彩妆",link:"/"},
                {type:"dianzi1",text:"电子",link:"/"}
            ],
            floor:[]
        };
        this.scroll="11";
    }
    render (){
        return (
            <div className='home' ref='home'>
                <div>
                    <Header />
                    <Tab tabs={this.state.Tabs}/>
                    <Swiper data={this.state.banders}/>
                    <nav className='navbar'>
                        <ul>
                            <li>
                                <img src='./images/3x/icon_food@3x.png' alt='' />
                                <p>正大</p>
                            </li>
                            <li>
                                <img src='./images/3x/icon_recharge@3x.png' alt='' />
                                <p>充值</p>
                            </li>
                            <li>
                                <img src='./images/3x/icon_shopping@3x.png' alt='' />
                                <p>伊藤忠</p>
                            </li>
                            <li>
                                <img src='./images/3x/icon_car@3x.png' alt='' />
                                <p>汽车</p>
                            </li>
                        </ul>
                    </nav>
                    <Selected />
                    {this.state.floor.map((val)=><FloorContainer list={val} key={val.title}/>)}
                </div>
            </div>
        )
    }
    componentDidMount(){
        this.scroll=new window.IScroll(this.refs.home);
    }
    componentWillMount(){
        fetch("http://localhost:3004/floor").then((res)=>res.json()).then((data)=>{
			this.setState({floor:data})
			console.log(this.state.floor)
		})
    }
    componentDidUpdate(){
        this.scroll.refresh();
    }
}
