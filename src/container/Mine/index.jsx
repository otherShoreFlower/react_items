import React from "react"
import BottomNav from "../../components/BottomNav"
import TopNav from "../../components/TopNav"

export default class Mine extends React.Component{
    render(){
        return (
            <div>
                <TopNav />
                我的
                <BottomNav />
            </div>
        )
    }
}