import React from "react"
import SearchHeader from "../../components/SearchHeader"
import { connect } from "react-redux"
import SearchList from "./subpage/searchList"
class Search extends React.Component{
    render(){
        return (
            <div>
                <SearchHeader history={ this.props.history }/>
                <SearchList keyword={ this.props.match.params.keyword } city={ this.props.city.cityName }/>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        city: state.city
    }
}

export default connect(
    mapStateToProps
)(Search)