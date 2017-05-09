import React, { Component } from 'react';
import * as d3 from 'd3';


class Axis extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const style = {
            shapeRendering: 'crispEdges',
            fontSize: 12,
            opacity: 1,
            fill: '#8f9fad'
        };

        const ticks = [3.6, 3.0, 2.0, 1.0, 0.4];
        const tick_values = [3.6, 3.0, 2.0, 1.0, 0.4];
        const range = [4, 0];

        const scaleX = d3.scaleLinear()
            .domain(range)
            .range([0, 535]);


        let axis = ticks.map(function (d, i) {
            let tick = scaleX(d);
            let transform = "translate(" + tick + ",0)";

            return (
                <g key={d.toString()} transform={transform}>
                    <line x2="0" y2="6" style={{ 'strokeWidth': 1, 'stroke': '#8f9fad' }}>

                    </line>
                    <text dy=".71em" y="9" x="0" style={{ 'textAnchor': 'middle'}}>
                        {tick_values[i]}
                    </text>
                </g>
            );
        });

        return (
            <g transform="translate(283, 32)" style={style}>
                {axis}
            </g>
        );
    }
}

export default Axis;
