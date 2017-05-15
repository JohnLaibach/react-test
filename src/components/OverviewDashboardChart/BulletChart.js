import React, { Component } from 'react';
import * as d3 from 'd3';

import Background from './Background';
import Bar from './BulletChart/Bar';
import Axis from './BulletChart/Axis';
import Marker from './BulletChart/Marker';


class BulletChart extends Component {

    updateMarkers() {
        let scaleX = d3.scaleLinear()
                .domain(this.props.range)
                .range([0, 535]);

        return this.props.markers.map(function (d, i) {
            let markerTick = scaleX(d.tick);
            let title = d.tickValue + ' (' + d.numPatients + ' patients)';

            return (
                <Marker key={i} letter="H" tick={markerTick} title={title} />
            );
        });
    }

    render() {
        const ticks = this.props.ticks;
        const tickValues = this.props.tickValues;
        const range = this.props.range;
        const unit = this.props.unit;

        const scaleX = d3.scaleLinear()
                .domain(this.props.range)
                .range([0, 535]);

        const mainTick = scaleX(this.props.data.mainTick);
        const secondaryTick = scaleX(this.props.data.secondaryTick);

        const mainTitle = this.props.data.mainValue + ' (' + this.props.data.mainNumPatients + ' patients)';
        const secondaryTitle = this.props.data.secondaryValue + ' (' + this.props.data.secondaryNumPatients + ' patients)';

        let markers = this.updateMarkers();

        return (
            <g>
                <Background />
                <Axis ticks={ticks} tickValues={tickValues} range={range} unit={unit} />
                <Bar fill="#edecb6" y="0" width={secondaryTick} height="8" title={secondaryTitle} />
                <Bar fill="#91afd5" y="8" width={mainTick} height="16" title={mainTitle} />
                {markers}
            </g>
        );
    }
}

export default BulletChart;
