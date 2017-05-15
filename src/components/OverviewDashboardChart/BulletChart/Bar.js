import React, { Component } from 'react';


class Bar extends Component {

    render() {
        const style = {
            fill: this.props.fill,
            transition: 'all 1s ease',
        };

        const height = this.props.height;
        const translate = 'translate(283, 8)';
        const y = this.props.y;

        return (
            <rect rx="5" ry="5" y={y} height={height} width={this.props.width} transform={translate} style={style}>
                <title>{this.props.title}</title>
            </rect>
        );
    }
}

export default Bar;
