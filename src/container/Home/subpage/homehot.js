import React from "react";
//网络数据请求
// import {httpGet} from "../../../utils/http"
import { HomeHotData,HomeHotData2 } from "../../../fetch/home"
import HomehotView from "../../../components/HomehotView"
export default class HomeHot extends React.Component{
    constructor(){
        super();
        this.state = {
            homehotData: [],
            homehotData2: []

        }
    }
    componentDidMount(){
        
        const result = HomeHotData("北京");
        result.then(res => res.json())
            .then(data => {
            this.setState({
                homehotData: data
            })
        })
        const result2 = HomeHotData2("上海");
        result2.then(res => res.json())
            .then(data => {
            this.setState({
                homehotData2: data
            })
        })
    }
    render(){
        return(
            <div>
                {
                    this.state.homehotData.length > 0 ?
                    <HomehotView data={ this.state.homehotData } title="热销单品"/>
                    :
                    <div>
                        数据加载中...
                    </div>
                }
                {
                    this.state.homehotData2.length > 0 ?
                    <HomehotView data={ this.state.homehotData2 } title="家庭常用"/>
                    :
                    <div>
                        数据加载中...
                    </div>
                }
            </div>
        )
    }
}