import React from "react"
import { getCommentData } from "../../../fetch/comment";
import CommentView from "../../../components/CommentView"
export default class DetailInfo extends React.Component{
    constructor(){
        super();
        this.state = {
            commentData: {}
        }
    }
    componentWillMount(){
        const id = this.props.id
        var result = getCommentData(id);
        result.then(res => res.json())
        .then(data => {
            this.setState({
                commentData:data
            })
        })

    }
    render(){
        return (
            <div>
                {
                    this.state.commentData.data ?
                    <CommentView data={this.state.commentData.data} /> :
                    <div>
                        数据正在加载...
                    </div>
                }
            </div>
        )
    }
}