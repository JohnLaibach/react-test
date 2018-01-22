import React from "react";


export default class ToggleButton extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        const buttonStyle = {
            border: '1px solid #e5e5e5',
            bordertop: 'none',
            backgroundColor: '#FFFFFF',
            margin: 0,
            display: 'block',
            width: '100%',
            textAlign: 'left',
            padding: '6px 13px'
        }
        
        const caretStyle = {
            position: 'absolute',
            top: '15px',
            right: '10px'
        }

        return (
            <button style={buttonStyle} onClick={this.props.onClickHandler}>
                <span>Nekaj</span>
                <b className="caret" style={caretStyle}></b>
            </button>
        );
    }
}
