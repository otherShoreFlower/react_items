import React from "react";
import CityHeader from "../../components/CityHeader"
import CurrentCity from "../../components/CurrentCity"
import HotCityList from "../../components/HotCityList"

import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import * as ActionsCity from "../../actions/City"
import { withRouter } from "react-router-dom"
class City extends React.Component{
    
    constomCityHandler(data){
        this.props.ActionsCity.updateCity({
            cityName:data
        })
        this.props.history.replace("/")
    }
    render() {
        return (
            <div>
                <CityHeader title="城市选择" history={ this.props.history }/>
                <CurrentCity city ={ this.props.city.cityName }/>
                <HotCityList title="热门城市" costomCityEvent={ this.constomCityHandler.bind(this) } />
            </div>
        )
    }
}
//读写
function mapStateToProps(state) {
    return {
        city: state.city
    }
}
function mapDispatchToProps(dispatch) {
    return {
        ActionsCity: bindActionCreators(ActionsCity, dispatch)
    }
}
export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(City))
    

