import React, { Component } from 'react';


class Improvement extends Component {

    render() {
        const textStyle = {
            textAnchor: 'end',
            fill: '#FFFFFF',
            fontSize: 20
        };

        const rectStyle = {
            fill: this.props.value < 0 ? '#ed7d7d' : '#648572'
        };

        const unit = this.props.unit;
        const decimalPlaces = this.props.decimalPlaces === null ? 0 : this.props.decimalPlaces;

        let text = '';

        if (this.props.value) {
            if (this.props.unit === "$") {
                text = unit + this.props.value.toFixed(decimalPlaces);
            } else if (unit === "%") {
                text = this.props.value.toFixed(decimalPlaces) + unit;
            } else {
                text = this.props.value.toFixed(decimalPlaces);
            }
        }

        return (
            this.props.value && (<g>
                <rect x="878" y="4" rx="20" ry="20" style={rectStyle} width="96" height="36">

                </rect>
                <text x="958" y="29" style={textStyle}>
                    {text}
                </text>
            </g>)
        );
    }
}

export default Improvement;
