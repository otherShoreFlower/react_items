import React from "react"
import LoginView from "../../components/LoginView"
import {connect} from "react-redux"
import * as actionUserInfo from "../../actions/UserInfo"
import { bindActionCreators } from "redux"
class Login extends React.Component{
    getLoginHandler(userName){
        //存储信息
        this.props.actionUserInfo.login({
            uname: userName
        })
        window.history.back();
    }
    render(){
        return(
            <div>
                <LoginView onLoginEvent={this.getLoginHandler.bind(this)}/>
            </div>
        )
    }
}
//读取
function mapStateToProps(state){
    return{
        UserInfo:state.UserInfo
    }
}
//存储
function mapDispatchToProps(dispatch){
    return{
        actionUserInfo: bindActionCreators(actionUserInfo,dispatch)
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)