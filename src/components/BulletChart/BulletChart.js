import React, { Component } from 'react';

import Description from './Description';

class BulletChart extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <svg width="1100" height="500">
                <Description />
            </svg>
        );
    }
}

export default BulletChart;