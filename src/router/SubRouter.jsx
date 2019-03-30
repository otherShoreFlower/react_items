import React from "react"
import { Route, Switch } from "react-router-dom"

import Home from "../container/Home"
import LiveService from "../container/LiveService"
import Mine from "../container/Mine"
import Shop from "../container/Shop"
import City from "../container/City"
import Search from "../container/Search"
import Details from "../container/Details"
import Login from "../container/Login"
import ShopCar from "../container/ShopCar"

import NotFound from "../container/NotFount"
export default class SubRouter extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route path="/live" component={LiveService}></Route>
                <Route path="/mine" component={Mine}></Route>
                <Route path="/shop" component={Shop}></Route>
                <Route path="/city" component={City}></Route>
                <Route path="/detail/:id" component={Details}></Route>
                <Route path="/search/:keyword" component={Search}></Route>
                <Route path="/login" component={Login}></Route>
                <Route path="/shopcar" component={ShopCar}></Route>
                <Route path="*" component={NotFound}></Route>
            </Switch>
        )
    }
}