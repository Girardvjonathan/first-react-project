import React from "react";
import IP from "./components/IP";
import axios from 'axios';
export default class MeteoIp extends React.Component {
  constructor() {
    super();
    this.state = {
      'ip': "0.0.0.0",
    }
    console.log(this.state.ip);

  }

  setIP(ip){
    console.log(ip);
    // console.log(this);
    // let ip = response.data.ip;
    this.state.ip = ip;
  }

  componentDidMount() {
    console.log(this);
    this.request = axios.get('https://api.ipify.org?format=json')
    .then(setIP(result));
  }

  componentWillUnmount() {
    this.request.abort();
  }

  render() {
    return (
      <div>
        <h1>Hello this is the MeteoIp page</h1>
        <IP ip={this.state.ip} />
      </div>

    );
  }
}
