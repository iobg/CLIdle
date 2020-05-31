import React, { Component } from "react";
import { render, Color } from "ink";

class ResourceCount extends Component {
    constructor() {
        super();
    }

    updateResourceCount(){
        this.state.count++;
    }

    render() {
        return <Color green>{this.props.count} thingies</Color>;

    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }
}

export default ResourceCount;