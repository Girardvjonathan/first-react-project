import React from "react";
import IP from "./IP";
import Meteo from "./Meteo";
import Location from "./Location";
import { connect } from "react-redux"
import { getIP, fetchMeteo, fetchLocation } from "../actions/MeteoIPActions"

@connect((store) => {
  return {
    ip: store.ip.ip,
    location: store.location.location,
    meteo: store.meteo.meteo,
  };
})
export default class MeteoIP extends React.Component {

  componentWillMount() {
    this.props.dispatch(getIP())
  }

  fetchLocation(ip) {
    console.log('hey hiii', ip);
    this.props.dispatch(fetchLocation(ip))
  }

  fetchMeteo(city) {
    console.log('hey nooooooo', city);
    this.props.dispatch(fetchMeteo(city))
  }

  render() {
    const { meteo, location, ip } = this.props;

    return (
      <div>
        <h2>Hi, Welcome to our website</h2>
        <IP ip={ip} />
        <Location onClick={this.fetchLocation.bind(this, ip)} location={location} />
        <Meteo onClick={this.fetchMeteo.bind(this, location.city)} meteo={meteo} city={location.city} />
      </div>
      );
  }
}
