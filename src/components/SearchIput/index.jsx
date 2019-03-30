import React from "react"
import "./style.less"
export default class SearchInput extends React.Component {
    constructor(){
        super();
        this.state = {
            values: ""
        }
    }
    onKeyUpHandler(event){
        if(event.keyCode === 13){
            this.props.history.push("/search/" + this.state.values)
        }
    }
    onChangeHandler(event){
        this.setState({
            values: event.target.value
        })
    }
    render() {
        return (
            <input 
                className="search-input" 
                type="text"
                valule={this.state.values}
                onKeyUp={this.onKeyUpHandler.bind(this)}
                onChange={this.onChangeHandler.bind(this)}
                 >
            </input>
        )
    }
}