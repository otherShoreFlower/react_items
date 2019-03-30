import React from "react"
import Item from "./Item"
export default class OrderView extends React.Component{
    render(){
        const data = this.props.data
        return(
            <div>
                <Item data = {data}/>
            </div>
        )
    }
}