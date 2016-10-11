import React from "react"
import { connect } from "react-redux"
import { getIP, fetchMeteo, fetchLocation } from "../actions/MeteoIPActions"
import _ from 'lodash'

@connect((store) => {
  console.log("store 12", store.location.location);
  return {
    ip: store.ip.ip,
    location: store.location.location,
    meteo: store.meteo.meteo,
  };
})
export default class Layout extends React.Component {
  componentWillMount() {
    this.props.dispatch(getIP())
  }

  fetchMeteo(city) {
    this.props.dispatch(fetchMeteo(city))
  }

  fetchLocation(ip) {
    this.props.dispatch(fetchLocation(ip))
  }

  render() {
    const { meteo, location, ip } = this.props;

    if (_.isEmpty(location)) {
      return (
        <div>
        <h1>This is your IP {ip}</h1>
        <button class="btn btn btn-primary btn-lg" onClick={this.fetchLocation.bind(this,ip)}>load Location</button>
        </div>
      )
    }

    var locationInfo = [];
    for(var key in location){
      locationInfo.push(<li key={key}>{key} : {location[key]}</li>);
    }

    if (_.isEmpty(meteo)) {
      return(
        <div>
          <h1>This is your IP {ip}</h1>
          <h3>This is your Location: </h3>
          <ul>
            {locationInfo}
          </ul>
          <button class="btn btn btn-primary btn-lg" onClick={this.fetchMeteo.bind(this, location.city)}>
            load Meteo
          </button>
        </div>
      )

    }

    return (
      <div>
      <h1>This is your IP {ip}</h1>
      <h3>This is your Location </h3>
      <ul>
        {locationInfo}
      </ul>
      <h3>Your current meteo is '{meteo.weather[0].description}' with &nbsp;
      {parseFloat((meteo.main.temp -273.15).toFixed(2))} Celsius </h3>
      </div>
    )
  }
}
