import React, { Component } from 'react';
import Title from './Title';
import Subtitle from './Subtitle';


class Description extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const style = {
            textAnchor: 'end'
        };
        const translate = 'translate(223, 24)';
        const link = this.props.link;
        const titleText = this.props.title;
        const subtitleText = this.props.subtitle;

        return (
            <g transform={translate} style={style}>
                <a href={link}>
                    <Title text={titleText} />
                    <Subtitle text={subtitleText} />
                </a>
            </g>
        );
    }
}

export default Description;
