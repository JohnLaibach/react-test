import React from "react";


export default class Title extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {

        const style = {
            background: '#e5e5e5',
            fontSize: '12px',
            margin: 0,
            padding: '2px 13px',
            display: 'block',
            textAlign: 'left',
            fontWeight: 400
        }

        return (
            <label style={style}>{this.props.text}</label>
        );
    }
}
