import React, { Component } from 'react';
import * as d3 from 'd3';

import Background from './Background';
import Bar from './BulletChart/Bar';
import Axis from './BulletChart/Axis';
import Marker from './BulletChart/Marker';


class BulletChart extends Component {

    createMarkers() {
        const scaleX = d3.scaleLinear()
                .domain(this.props.range)
                .range([0, 535]);

        return this.props.markers.map(function (d, i) {
            const markerTick = scaleX(d.tick);
            const title = d.tickValue + ' (' + d.numPatients + ' patients)';
            const letter = d.letter !== undefined ? d.letter : 'H';

            return (
                <Marker key={i} letter={letter} tick={markerTick} title={title} color={d.color} />
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
        const mainTitle = this.props.data.mainValue + ' (' + this.props.data.mainNumPatients + ' patients)';

        const secondaryTick = this.props.data.secondaryTick > -1 ? scaleX(this.props.data.secondaryTick) : null;
        const secondaryTitle = this.props.data.secondaryValue + ' (' + this.props.data.secondaryNumPatients + ' patients)';

        const mainY = secondaryTick !== null ? 8 : 0;
        const mainHeight = secondaryTick !== null ? 16 : 24;

        const markers = this.createMarkers();

        const mainBarFill = markers.length > 1 ? '#edecb6' : '#91afd5';

        return (
            <g>
                <Background />
                <Axis ticks={ticks} tickValues={tickValues} range={range} unit={unit} decimalPlaces={this.props.decimalPlaces} />
                (secondaryTick && <Bar fill="#edecb6" y="0" width={secondaryTick} height="8" title={secondaryTitle} />)
                <Bar fill={mainBarFill} y={mainY} width={mainTick} height={mainHeight} title={mainTitle} />
                {markers}
            </g>
        );
    }
}

export default BulletChart;
