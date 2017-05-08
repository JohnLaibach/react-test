import React, { Component } from 'react';
import Title from './Title';
import Subtitle from './Subtitle';


class Description extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const translate = 'translate(200, 300)';
        const link = 'http://google.com';
        const titleText = 'Title';
        const subtitleText = 'Subtitle';

        return (
            <g transform={translate}>
                <a href={link}>
                    <Title text={titleText} />
                    <Subtitle text={subtitleText} />
                </a>
            </g>
        );
    }
}

export default Description;
