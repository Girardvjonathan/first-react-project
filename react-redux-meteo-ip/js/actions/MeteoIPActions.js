import axios from 'axios';

export function getIP() {
  return function(dispatch) {
    axios.get('https://api.ipify.org?format=json')
    .then((response) => {
      let ip = response.data.ip;
      dispatch({type: "RECEIVE_IP", ip: ip });
    });
  }
}

export function fetchLocation() {
  return function(dispatch) {
    axios.get('https://api.ipify.org?format=json')
    .then((response) => {
      let ip = response.data.ip;
      dispatch({type: "RECEIVE_IP", ip: ip });
    });
  }
}

export function fetchMeteo() {
  return function(dispatch) {
    axios.get('https://api.ipify.org?format=json')
    .then((response) => {
      let ip = response.data.ip;
      dispatch({type: "RECEIVE_IP", ip: ip });
    });
  }
}
