import React from "react";
import MenuItem from "./DropdownMenu/MenuItem"
import { style } from "d3-selection";

export default class DropdownMenu extends React.Component {
    constructor(props) {
        super(props);
    }

    handleChangeTimePeriod = (param) => (e) => {
        this.props.onChangeHandler(param);
        
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
        
        const type = this.props.type;
        const items = this.props.items;
        const selectedItems = this.props.selectedItems;

        return (
            <ul style={style}>
                {items.map((item, i) => <MenuItem key={i} data={item} type={type} onChangeHandler={this.props.onChangeHandler} selected={selectedItems.includes(item.value)} />)}
            </ul>
        );
    }
}
