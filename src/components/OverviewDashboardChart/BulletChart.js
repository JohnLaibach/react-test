import React, { Component } from 'react';
import * as d3 from 'd3';

import Background from './Background';
import Bar from './BulletChart/Bar';
import Axis from './BulletChart/Axis';
import Marker from './BulletChart/Marker';


class BulletChart extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const ticks = this.props.ticks;
        const tickValues = this.props.tickValues;
        const range = this.props.range;
        const unit = this.props.unit;

        const scaleX = d3.scaleLinear()
            .domain(range)
            .range([0, 535]);

        const mainValue = scaleX(this.props.mainValue);
        const secondaryValue = scaleX(this.props.secondaryValue);

        let markerTick = '';

        if(this.props.markers.length === 1)
            markerTick = scaleX(this.props.markers[0].tick);

        return (
            <g>
                <Background />
                <Axis ticks={ticks} tickValues={tickValues} range={range} unit={unit} />
                <Bar fill="#edecb6" y="0" width={secondaryValue} height="8" />
                <Bar fill="#91afd5" y="8" width={mainValue} height="16" />
                <Marker letter="H" tick={markerTick} tickValue="50" />
            </g>
        );
    }
}

export default BulletChart;
