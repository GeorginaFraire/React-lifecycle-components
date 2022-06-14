import React from "react";
import PropTypes from "prop-types";

export default class TextInput extends React.Component {
    static propTpyes = {
        value: PropTypes.string,
        onChange: PropTypes.func,
    };

    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.props.onChange(event.target.value);
    }

    render(){
        return(
            <input 
            type = "text"
            value = {this.props.value}
            onChange = {this.handleChange}
            />
        );
    }
}