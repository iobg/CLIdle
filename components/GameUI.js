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
            <Box>
                <Color green>Type the word: {this.props.currentWord} </Color> 
                <Box paddingLeft = {20}>
                    <Color yellow >Words: {this.props.count}</Color> 
                </Box>
            </Box>
            <Box paddingLeft = {2} paddingTop = {18}>
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