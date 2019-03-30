import React from "react"
import "./style.less"
export default class LoginView extends React.Component {
    //受控组件,存储信息
    //登录信息存入redux
    constructor() {
        super();
        this.state = {
            userName: ""
        }
    }
    userNameHandler(event){
        this.setState({
            //获取输入框数据赋值给初始化数据userName
            userName: event.target.value
        })
    }
    loginHandler(){
        //将数据传递给父级,存储到redux中,事件传递
        if(this.state.userName !== ""){
            this.props.onLoginEvent(this.state.userName);
        }
        
    }
    render() {
        return (
            <div id="login-container">
                <div className="input-container phone-container">
                    <i className="icon-tablet"></i>
                    <input
                        placeholder="输入手机号"
                        //绑定输入框初始化数据
                        value={this.state.userName}
                        //添加事件
                        onChange={this.userNameHandler.bind(this)}
                    />
                </div>
                <div className="input-container password-container">
                    <i className="icon-key"></i>
                    <button>发送验证码</button>
                    <input type="text" placeholder="输入验证码" />
                </div>
                <button className="btn-login" onClick={this.loginHandler.bind(this)}>登录</button>
            </div>
        )
    }
}