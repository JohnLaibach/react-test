import React, { Component } from 'react';

import Background from './Background';
import Bar from './BulletChart/Bar';
import Axis from './BulletChart/Axis';
import Marker from './BulletChart/Marker';


class BulletChart extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const mainValue = this.props.mainValue;
        const secondaryValue = this.props.secondaryValue;

        return (
            <g>
                <Background />
                <Axis />
                <Bar fill="#edecb6" y="0" width={secondaryValue} height="8" />
                <Bar fill="#91afd5" y="8" width={mainValue} height="16" />
                <Marker />
            </g>
        );
    }
}

export default BulletChart;
