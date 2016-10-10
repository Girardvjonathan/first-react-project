import React from "react"
import { connect } from "react-redux"

import { getIP, fetchMeteo, fetchLocation } from "../actions/MeteoIPActions"

@connect((store) => {
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

  fetchMeteo() {
    this.props.dispatch(fetchMeteo())
  }

  fetchLocation() {
    this.props.dispatch(fetchLocation())
  }

  render() {
    const { meteo, location, ip } = this.props;

    if (!location.length) {
      return
      <div>
        <h1>This is your IP {ip}</h1>
        <button onClick={this.fetchLocation.bind(this)}>load Location</button>
      </div>
    }
    
    if (!meteo.length) {
      return
      <div>
        <h1>This is your IP {ip}</h1>
        <h3>This is your Location {location}</h3>
        <button onClick={this.fetchMeteo.bind(this)}>load Meteo</button>
      </div>
    }

    // const mappedTweets = tweets.map(tweet => <li>{tweet.text}</li>)

    return <div>
      <h1>This is your IP {ip}</h1>
      <h3>This is your Location {location}</h3>
      <h3>This is your Meteo {meteo}</h3>
    </div>
  }
}
