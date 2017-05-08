import React, { Component } from 'react';


class Subtitle extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const text = this.props.text;

        return (
            <text className="subtitle">{text}</text>
        );
    }
}

export default Subtitle;
