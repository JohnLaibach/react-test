import React, { Component } from 'react';
import * as d3 from 'd3';


class Axis extends Component {

    createAxis() {
        const ticks = this.props.ticks;
        const tickValues = this.props.tickValues;
        const range = this.props.range;
        const unit = this.props.unit;

        const scaleX = d3.scaleLinear()
            .domain(range)
            .range([0, 535]);

        return ticks.map(function (d, i) {
            let tick = scaleX(d);
            let transform = "translate(" + tick + ",0)";

            let text = '';

            if (unit === "$") {
                text = unit + tickValues[i].toFixed(0);
            } else if (unit === "%") {
                text = tickValues[i] + unit;
            } else {
                text = tickValues[i];
            }

            return (
                <g key={d.toString()} transform={transform}>
                    <line x2="0" y2="6" style={{ 'strokeWidth': 1, 'stroke': '#8f9fad' }}>

                    </line>
                    <text dy=".71em" y="9" x="0" style={{ 'textAnchor': 'middle'}}>
                        {text}
                    </text>
                </g>
            );
        });
    }

    render() {
        const style = {
            shapeRendering: 'crispEdges',
            fontSize: 12,
            opacity: 1,
            fill: '#8f9fad'
        };

        let axis = this.createAxis();

        return (
            <g transform="translate(283, 32)" style={style}>
                {axis}
            </g>
        );
    }
}

export default Axis;
