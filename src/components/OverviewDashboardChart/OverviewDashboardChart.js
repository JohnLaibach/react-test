import React, { Component } from 'react';

import Description from './Description';
import BulletChart from './BulletChart';
import Improvement from './Improvement';


class OverviewDashboardChart extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const titleText = this.props.title;
        const subtitleText = this.props.subtitle;

        const mainValue = this.props.mainValue;
        const secondaryValue = this.props.secondaryValue;

        return (
            <svg width="1100" height="52">
                <g>
                    <Description title={titleText} subtitle={subtitleText} />
                    <BulletChart mainValue={mainValue} secondaryValue={secondaryValue} />
                    <Improvement />
                </g>
            </svg>
        );
    }
}

export default OverviewDashboardChart;
