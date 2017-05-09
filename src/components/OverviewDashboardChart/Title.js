import React, { Component } from 'react';


class Title extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const style = {
            fontSize: 18,
            fontWeight: 300,
            color: '#4575b4',
            fill: '#4575b4'
        };
        const title = this.props.text;

        return (
            <text className="title" style={style}>{title}</text>
        );
    }
}

export default Title;
