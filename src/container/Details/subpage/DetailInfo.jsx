import React from "react"
import { getDetailData } from "../../../fetch/detail";
import DetailView from "../../../components/DetailView";

export default class DetailInfo extends React.Component{

    constructor(){
        super();
        this.state = {
            detailsData: {}
        }
    }

    componentDidMount(){
        const id = this.props.id;
        var result = getDetailData(id)
        result.then(res => res.json())
        .then(data => {
            this.setState({
                detailsData: data
            })
        })
    }
    //判断登录
    changeloginHandler(){
        //接收uname
        if(this.props.userName){
            console.log("登录了");
        }else{
            console.log("未登录");
            this.props.history.push("/login");
        }
    }
    render(){
        return (
            <div>
                {
                    this.state.detailsData.imgs ?
                    <DetailView
                        history={this.props.history} 
                        data={ this.state.detailsData } 
                        id={this.props.id}
                        onChangelogin={this.changeloginHandler.bind(this)}
                    /> :
                    <div>
                        数据加载中...
                    </div>
                }
                
            </div>
        )
    }
}