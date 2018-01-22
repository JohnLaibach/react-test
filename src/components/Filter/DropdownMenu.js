import React from "react";
import MenuItem from "./DropdownMenu/MenuItem"
import { style } from "d3-selection";

export default class DropdownMenu extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        let style = {
            listStyleType: 'none',
            textAlign: 'left',
            padding: 0,
            overflowY: 'hidden',
            overflowX: 'hidden',
            backgroundColor: '#FFFFFF',
            border: '1px solid #EEEEEE',
            display: this.props.isOpen ? 'block' : 'none'
        }

        return (
            <ul style={style}>
                {this.props.items.map((item, i) => <MenuItem key={i} data={item} type={this.props.type} onChangeHandler={this.props.onChangeHandler} selected={this.props.selectedItems.includes(item.value)} />)}
            </ul>
        );
    }
}
