import React from "react"
import "./styel.less"

export default class Item extends React.Component {
    render() {
        const data = this.props.data
        console.log(this.props.data)
        console.log(this.props.data[0].img)
        return (
            <div className="clear-fix order-item-container">
                <div className="order-item-img float-left">
                    <img src={data[0].img} />
                </div>
            </div>
        )
    }
}