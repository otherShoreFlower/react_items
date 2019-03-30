import React from "react"
import SearchInput from "../SearchIput"
import "./style.less"
export default class SearchHeader extends React.Component{
    onClickHandler(event){
        window.history.back();
    }
    render(){
        return (
            <div id="search-header" className="clear-fix">
                <span className="back-icon float-left" onClick={this.onClickHandler.bind(this)}>
                    <i className="icon-chevron-left"></i>
                </span>
                <div className="input-container">
                    <i className="icon-search"></i>
                    <SearchInput history={ this.props.history }/>
                </div>
            </div>
        )
    }
}