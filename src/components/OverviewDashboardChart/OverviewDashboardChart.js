import React, { Component } from 'react';

import Description from './Description';
import BulletChart from './BulletChart';
import Improvement from './Improvement';


class OverviewDashboardChart extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        const titleText = this.props.data.title;
        const subtitleText = this.props.data.subtitle;
        const link = this.props.data.link;

        const mainValue = this.props.data.last_month_tick;
        const secondaryValue = this.props.data.hospital_system.last_month.tick;

        const ticks = this.props.data.ticks;
        const tickValues = this.props.data.tick_values;
        const range = this.props.data.range;
        const unit = this.props.data.units;

        const markers = [];

        if (this.props.data.group_organizations.length < 1) {
            markers.push({
                'tick': this.props.data.baseline_tick,
                'tickValue': this.props.data.baseline_value
            });
        }

        return (
            <svg width="1100" height="52">
                <g>
                    <Description title={titleText} subtitle={subtitleText} link={link} />
                    <BulletChart mainValue={mainValue} secondaryValue={secondaryValue} ticks={ticks} tickValues={tickValues} range={range} unit={unit} markers={markers} />
                    <Improvement />
                </g>
            </svg>
        );
    }
}

export default OverviewDashboardChart;
