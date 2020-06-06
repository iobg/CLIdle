import React, { Component } from "react";
import { render, Color, Box } from "ink";

class TextBox extends Component {



    constructor() {
        super();
    }

    updateResourceCount(){
        this.state.count++;
    }

    render() {
        return (
        <div>
            <Box paddingLeft = {2}>
                <Color green>Type the word: {this.props.currentWord} </Color> 
            </Box>
            <Box paddingLeft = {2} paddingTop = {20}>
                <Color red>|{this.props.typingState}|</Color> 
            </Box>
        </div>
        )

    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }
}

export default TextBox;