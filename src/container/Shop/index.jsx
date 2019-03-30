import React from "react"
import BottomNav from "../../components/BottomNav"
import TopNav from "../../components/TopNav"

export default class Shop extends React.Component{
    render(){
        return (
            <div>
                <TopNav />
                商城
                <BottomNav />
            </div>
        )
    }
}