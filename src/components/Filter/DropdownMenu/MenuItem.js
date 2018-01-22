import React from "react";
import Radium from "radium";

class MenuItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        
        var type = 'checkbox'

        if(this.props.type == 'single') {
            type = 'radio';
        }

        const aStyle = {
            background: '#FFFFFF',
            display: 'block',
            ':hover': {
                background: '#f6f6f6',
                textDecoration: 'none'
            }
        }

        const labelStyle = {
            padding: '3px 20px 7px 40px',
            display: 'block',
            cursor: 'pointer'
        }

        const inputStyle = {
            marginLeft: '-20px',
            marginRight: 0
        }
        
        return (
            <li>
                <a tabIndex={this.key} style={aStyle}>
                    <label style={labelStyle}>
                        <input type={type} value={this.props.data.value} style={inputStyle} onChange={this.props.onChangeHandler(this.props.data.value)} checked={this.props.selected} />&nbsp;
                        {this.props.data.label}
                    </label>
                </a>
            </li>
        );
    }
}

export default Radium(MenuItem);
