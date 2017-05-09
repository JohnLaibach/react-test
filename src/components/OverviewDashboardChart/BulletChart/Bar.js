import React, { Component } from 'react';


class Bar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const style = {
            fill: this.props.fill
        };
        const width = this.props.width;
        const height = this.props.height;
        const translate = 'translate(283, 8)';
        const y = this.props.y;

        return (
            <rect rx="5" ry="5" y={y} height={height} width={width} transform={translate} style={style}>

            </rect>
        );
    }
}

export default Bar;
