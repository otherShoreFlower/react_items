import React from "react"
import DetailHeader from "../../components/CityHeader"
import DetailInfo from "./subpage/DetailInfo"
import { connect } from  "react-redux"

class Details extends React.Component {
    render() {
        return (
            <div>
                <DetailHeader title="详情页" history={this.props.history} />
                <DetailInfo
                    id={this.props.match.params.id}
                    userName={this.props.userInfo.uname}
                    history={this.props.history}
                />
            </div>
        )
    }
}
function mapStateToProps(state){
    return {
        userInfo:state.userInfo
    }
}

export default connect(
    mapStateToProps
)(Details)