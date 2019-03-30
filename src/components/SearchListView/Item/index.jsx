import React from "react"
import "./style.less"
import { Link } from "react-router-dom"
export default class Item extends React.Component {
    render() {
        var item = this.props.data
        return (
            <div className="list-item">
                <Link to={`/detail/${item.id}`}>
                    <img src={item.img} alt="" />
                    <div className="mask">
                        <div className="left">
                            <p>{item.title}</p>
                            <p>{item.houseType}</p>
                        </div>
                        <div className="right">
                            <div className="bin">
                                {item.rentType}
                            </div>
                            <p dangerouslySetInnerHTML={{ __html: item.price + "/月" }} />
                        </div>
                    </div>
                </Link>
            </div>
        )
    }
}