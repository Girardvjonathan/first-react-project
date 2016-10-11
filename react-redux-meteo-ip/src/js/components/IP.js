import React from "react";

export default class IP extends React.Component {
  render() {
    const { ip } = this.props;
    return (
      <p>This is your IP {ip}</p>
    );
  }
}
