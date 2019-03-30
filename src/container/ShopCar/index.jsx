import React from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import CarHeader from "../../components/CityHeader"
import UserInfo from "../../components/UserInfo"
import Order from "./subpage/order"

class ShopCar extends React.Component{
    // 判断登录状态进入购物车页面
    componentDidMount(){
        if(this.props.userInfo.uname){
            //Yes
        }else{
            this.props.history.push("/login")
        }
    }
    render(){
        return(
            <div>
                <CarHeader title="购物车"/>
                <UserInfo username={ this.props.userInfo.uname } city={ this.props.city.cityName } />
                <Order />
                
            </div>
        )
    }
}
function mapStateToPorps(state){
    return{
        userInfo:state.userInfo,
        city:state.city
    }
}
export default withRouter(connect(
    mapStateToPorps
)(ShopCar))