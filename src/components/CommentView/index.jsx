import React from "react"
import Item from "./Item"
import "./style.less"
export default class CommentView extends React.Component{
    render(){
        //获取数据
        const data = this.props.data;
        return (
            <div className="comment-listt">
                {
                    data.map((item, index) => {
                        return <Item key={index} data={item}></Item>
                    })
                }
            </div>
        )
    }
}