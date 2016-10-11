import React from "react";
import _ from 'lodash';

export default class Location extends React.Component {

  render() {
    const { location } = this.props;
    if (_.isEmpty(location)) {
      return (
        <div>
        <button class="btn btn btn-primary btn-lg" onClick={this.props.onClick}>load Location</button>
        </div>
      )
    }

    var locationInfo = [];
    for(var key in location){
      locationInfo.push(<li key={key}>{key} : {location[key]}</li>);
    }

    return(
      <div>
      <h3>This is your Location: </h3>
      <ul>
      {locationInfo}
      </ul>
      </div>
    )

  }
}
