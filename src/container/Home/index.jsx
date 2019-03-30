import React from "react"
import BottomNav from "../../components/BottomNav"
import TopNav from "../../components/TopNav"
import SwiperView from "../../components/SwiperView"
import banner1 from "../../static/images/banner1.png"
import banner2 from "../../static/images/banner2.png"
import banner3 from "../../static/images/banner3.png"
import banner4 from "../../static/images/banner4.png"
import banner5 from "../../static/images/banner5.png"
import banner6 from "../../static/images/banner6.png"
//引入HomeHot数据请求文件
import HomeHot from "./subpage/homehot"
import { connect } from "react-redux"
class Home extends React.Component {
    render() {
        return (
            <div>
                <TopNav city={ this.props.city.cityName } history={this.props.history} />
                <SwiperView banners={[banner1, banner2, banner3, banner4, banner5, banner6]} />
                <HomeHot />
                <BottomNav />
            </div>
        )
    }
}
function mapStateToProps(state){
    return {
        city: state.city
    }
}
export default connect(
    mapStateToProps
)(Home)