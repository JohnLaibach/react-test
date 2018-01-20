import React from "react";

import Title from "./Header/Title";

export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }

  render() {
    return (
      <Title text={this.props.title} />
    );
  }
}
