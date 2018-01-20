import React from "react";
import MenuItem from "./DropdownMenu/MenuItem"
import { style } from "d3-selection";

export default class DropdownMenu extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        };
    }

    toggleVisibility() {
        this.setState(prevState => ({
            isOpen: !prevState.isOpen
        }));
    }

    render() {

        const style = {
            listStyleType: 'none',
            textAlign: 'left',
            padding: 0,
            overflowY: 'hidden',
            overflowX: 'hidden',
            backgroundColor: '#FFFFFF',
            border: '1px solid #EEEEEE'
        }

        return (
            <ul style={style}>
                {this.props.items.map((item, i) => <MenuItem key={i} data={item} type={this.props.type} />)}
            </ul>
        );
    }
}
