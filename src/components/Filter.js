import React, { Component } from 'react';
import { connect } from "react-redux";
import Header from './Filter/Header'
import ToggleButton from './Filter/ToggleButton';
import DropdownMenu from './Filter/DropdownMenu';

const mapStateToProps = state => {
    return { selectedItems: state.selectedItems }
};

class Filter extends Component {
    constructor(props) {
        super(props);

        console.log(this.props.selectedItems);

        this.state = {
            isOpen: false,
            selectedItems: this.props.selectedItems
        }

        this.handleToggleButtonClick = this.handleToggleButtonClick.bind(this);
    }

    handleToggleButtonClick() {
        this.setState(prevState => ({
            isOpen: !prevState.isOpen
        }));
    }

    handleDropdownChange = e => {
        this.props.handleChange(e.target.value);
    }

    render() {
        
        const inputGroupStyle = {
            width: '100%'
        }

        let buttonTitle = '';
        const selectedItems = this.props.selectedItems;
        console.log(this.props.selectedItems);
        this.props.data.map(function(item) {
            if(selectedItems.includes(item.value))
                buttonTitle += item.label + ' ';
        });

        return (
            <div className="col-lg-3 col-sm-6">
                <Header title={this.props.title} />
                <div className="input-group" style={inputGroupStyle}>
                    <ToggleButton onClickHandler={this.handleToggleButtonClick} title={buttonTitle} />
                    <DropdownMenu items={this.props.data} type={this.props.type} isOpen={this.state.isOpen} onChangeHandler={this.props.handleChange} selectedItems={this.props.selectedItems} />
                </div>
            </div>
        );
    }
}

const ConnectedFilter = connect(mapStateToProps)(Filter);
export default ConnectedFilter;
