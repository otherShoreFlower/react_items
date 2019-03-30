import React from "react"
import "./style.less"

export default class Tabs extends React.Component {

    constructor(){
        super();
        this.state = {
            currentIndex:0
        }
    }

    //控制内容的显示隐藏
    check_item_index(index){ //index是tab的唯一标示
        //index:要显示的内容
        //currentIndex: tab标题的index
        return index === this.state.currentIndex ? "show" : "Tab_item"

    }
   
    //点击切换tab事件
    changeTabHandler(index){
        this.setState({
            currentIndex: index
        })
    }
    //处理高亮样式
    check_item_active(index){
        return index === this.state.currentIndex ? "Tab_title active" : "Tab_title"
    }
    render() {
        const _this = this;
        return (
            <div>
                <div className="Tab_title_wrap">
                    {
                        React.Children.map(this.props.children, function (element, index) {
                            return (
                                <div className={_this.check_item_active(index)} onClick={_this.changeTabHandler.bind(_this, index)}>
                                    {element.props.tabName}
                                </div>
                            )
                        })
                    }
                </div>
                <div className="Tab_title_wrap">
                    {
                        React.Children.map(this.props.children, function (element, index) {
                            return (
                                <div className={_this.check_item_index(index)}>
                                    {element.props.children}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}