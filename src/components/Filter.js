import React, { Component } from 'react';
import { connect } from "react-redux";
import Header from './Filter/Header'
import ToggleButton from './Filter/ToggleButton';
import DropdownMenu from './Filter/DropdownMenu';

class Filter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        }

        this.handleToggleButtonClick = this.handleToggleButtonClick.bind(this);
    }

    handleToggleButtonClick() {
        this.setState(prevState => ({
            isOpen: !prevState.isOpen
        }));
    }

    render() {
        
        const inputGroupStyle = {
            width: '100%'
        }

        return (
            <div className="col-lg-3 col-sm-6">
                <Header title={this.props.title} />
                <div className="input-group" style={inputGroupStyle}>
                    <input type="hidden" />
                    <ToggleButton onClickHandler={this.handleToggleButtonClick} />
                    <DropdownMenu items={this.props.data} type={this.props.type} isOpen={this.state.isOpen} onChangeHandler={this.props.handleChange} />
                </div>
            </div>
        );
    }
}

export default Filter;
