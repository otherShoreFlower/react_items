import React from "react"
import StoreBuyView from "../../../components/StoreBuyView"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import * as collectActions from "../../../actions/Collect"
import { getBuyData } from "../../../fetch/buy"

class StoreBuy extends React.Component {
    //初始化数据,用于控制收藏状态
    constructor() {
        super();
        this.state = {
            currentCollect: false
        }
    }
    //进入页面判断收藏状态
    componentDidMount() {
        this.setState({
            currentCollect: this.isCollected()
        })
    }
    //判断登录状态
    isLogined() {
        if (!this.props.userInfo.uname) {
            return false;
        } else {
            return true;
        }
    }
    //由子级(StoreBuyView)的点击事件执行collectHandler,完成收藏功能
    collectHandler() {
        //判断是否登录
        if (this.isLogined()) {
            //判断是否收藏
            if (this.isCollected()) {
                //取消收藏
                this.props.collectActions.cancelCollect({
                    id: this.props.id
                })
                this.setState({
                    currentCollect: false
                })

            } else {
                //读取到数据存到redux中(收藏)
                this.props.collectActions.setCollect({
                    id: this.props.id
                })
                this.setState({
                    currentCollect: true
                })
            }

        } else {
            //去登陆
            this.props.history.push("/login")
        }

    }
    //判断收藏状态
    isCollected() {
        const id = this.props.id;
        const collects = this.props.collect;
        return collects.some((element) => {
            return element.id === id;
        })
    }
    //购买
    buyHandler() {
        
        if (this.isLogined()) {
            // 给后台发送数据:订单信息
            /**
             * 发送订单的id
             */
            console.log(this.props.id);
            getBuyData(this.props.id)
                .then(res => res.json())
                .then(data => {
                    alert(data.msg)
                })


        } else {
            this.props.history.push("/login")
        }

    }

    render() {
        return (
            <div>
                <StoreBuyView
                    currentCollect={this.state.currentCollect}
                    onStoreEvent={this.collectHandler.bind(this)}
                    onBuyEvent={this.buyHandler.bind(this)}
                />
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        collect: state.collect,
        userInfo: state.userInfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
        collectActions: bindActionCreators(collectActions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StoreBuy)