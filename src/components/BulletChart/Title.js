import React, { Component } from 'react';


class Title extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const title = this.props.text;

        return (
            <text className="title">{title}</text>
        );
    }
}

export default Title;
