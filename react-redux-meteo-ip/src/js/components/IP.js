import React from "react";

export default class IP extends React.Component {
  render() {
    return (
        <div class="row">
          <div class="col-lg-12">
            <p>Your ip is  {this.props.ip}</p>
          </div>
        </div>
    );
  }
}
