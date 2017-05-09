import React, { Component } from 'react';


class Improvement extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const textStyle = {
            textAnchor: 'end',
            fill: '#FFFFFF',
            fontSize: 20
        };

        return (
            <g>
                <rect x="878" y="4" rx="20" ry="20" style={{ 'fill': '#648572' }} width="96" height="36">

                </rect>
                <text x="958" y="29" style={textStyle}>
                    3
                </text>
            </g>
        );
    }
}

export default Improvement;
