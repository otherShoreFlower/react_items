import React from "react"
import BottomNav from "../../components/BottomNav"
import TopNav from "../../components/TopNav"

export default class LiveServer extends React.Component{
    render(){
        return (
            <div>
                <TopNav />
                生活服务
                <BottomNav />
            </div>
        )
    }
}