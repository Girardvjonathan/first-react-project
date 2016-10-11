import React from "react";
import _ from 'lodash';

export default class Meteo extends React.Component {
  render() {
    const { meteo, city } = this.props;

    if (_.isEmpty(meteo) && city) {
      return(
        <div>
          <button class="btn btn btn-primary btn-lg"  onClick={this.props.onClick}>
            load Meteo
          </button>
        </div>
      )

    } else if(!_.isEmpty(meteo)) {
      return (
        <h3>Your current meteo is '{meteo.weather[0].description}' with &nbsp;
           {parseFloat((meteo.main.temp -273.15).toFixed(2))} Celsius </h3>
      )
    } else {
      return null;
    }

  }
}
