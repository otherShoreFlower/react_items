import React from "react"
import "./style.less"

export default class Pagination extends React.Component{
    render(){
        const dots = this.props.dots
        return (
            <div className="swiper-pagination">
                <ul>
                    {
                        dots.map((element, index) => {
                            return <li className={ index === this.props.index ? "selected" : "" } key={index}></li>
                        })
                    }
                </ul>
            </div>
        )
    }
}