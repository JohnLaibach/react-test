import React, { Component } from 'react';


class Marker extends Component {

    render() {

        const markerStyle = {
            fill: this.props.color !== undefined ? this.props.color : '#596a7a',
            transition: 'all 1s ease'
        };

        const textStyle = {
            fill: '#FFF',
            color: '#FFF',
            fontSize: 12,
            fontWeight: 700,
        };

        const tick = this.props.tick;
        const letter = this.props.letter;
        const title = this.props.title;

        let transform = "translate(" + (273 + parseFloat(tick)) + ", 0)";

        return (
            <g style={markerStyle} transform={transform}>
                <path d="M6,0C2.686,0,0,2.799,0,6.25C0,12.217,6,20,6,20s6-7.783,6-13.75C12,2.798,9.314,0,6,0z" transform="scale(1.6)">
                </path>
                <text transform="translate(5,15)" style={textStyle}>{letter}</text>
                <title>{title}</title>
            </g>
        );
    }
}

export default Marker;
