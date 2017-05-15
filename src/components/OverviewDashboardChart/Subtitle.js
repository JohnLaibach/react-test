import React, { Component } from 'react';


class Subtitle extends Component {

    render() {
        const style = {
            fontSize: 11,
            fontWeight: 100,
            color: '#8f9fad',
            fill: '#8f9fad'
        };
        const text = this.props.text;

        return (
            <text className="subtitle" dy="1.3em" style={style}>{text}</text>
        );
    }
}

export default Subtitle;
