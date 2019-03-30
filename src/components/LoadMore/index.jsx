import React from "react"

export default class LoadMore extends React.Component{

    componentDidMount(){
        //获取元素
        const wrapper = this.refs.wrapper;
        //获取视口高度
        let winheight = document.documentElement.clientHeight;
        var timer = null;
        var _this = this;
        function callback() {
            let top = wrapper.getBoundingClientRect().top;
            if(top < winheight) {
                //再次请求数据
                _this.props.onCostomEvent();
            }
        }
        window.addEventListener("scroll", function (event){
            if(timer){
                clearTimeout(timer);
            }
            timer = setTimeout(function (){
                callback();
            },300)
        })
    }
    render(){
        return(
            <div className="load-more" ref="wrapper">
                数据加载中...
            </div>
        )
    }
}