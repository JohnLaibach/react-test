import React, { Component } from 'react';


class Background extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const style = {
            fill: '#ddd'
        };
        const width = 535;
        const height = 24;
        const translate = 'translate(283, 8)';

        return (
            <g>
                <rect rx="5" ry="5" height={height} width={width} transform={translate} style={style}>

                </rect>
                <rect x="878" y="4" rx="20" ry="20" width="192" height="36" style={{ 'fill': '#f1f2f5' }}>

                </rect>
            </g>
        );
    }
}

export default Background;
