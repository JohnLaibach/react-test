import React, { Component } from 'react';
import Header from './Filter/Header'
import ToggleButton from './Filter/ToggleButton';
import DropdownMenu from './Filter/DropdownMenu';

class Filter extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.onClick();
    }

    render() {
        
        const inputGroupStyle = {
            width: '100%'
        }

        return (
            <div className="col-lg-3 col-sm-6">
                <Header title="Nekaj" />
                <div className="input-group" style={inputGroupStyle}>
                    <input type="hidden" />
                    <ToggleButton />
                    <DropdownMenu items={this.props.data} type={this.props.type} />
                </div>
            </div>
        );
    }
}

export default Filter;
