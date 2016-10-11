import axios from 'axios';

export function getIP() {
  return function(dispatch) {
    axios.get('https://api.ipify.org?format=json')
    .then((response) => {
      let ip = response.data.ip;
      dispatch({type: "FETCH_IP_FULFILLED", payload: ip });
    });
  }
}

export function fetchLocation(ip) {
  return function(dispatch) {
    axios.get('https://freegeoip.net/json/'+ip)
    .then((response) => {
      let location = response.data;
      dispatch({type: "FETCH_LOCATION_FULFILLED", payload: location });
    });
  }
}

export function fetchMeteo(city) {
  return function(dispatch) {
    axios.get('http://api.openweathermap.org/data/2.5/weather?q=' + city +
    '&APPID=2341257caa20fe9ed22a1c7a4246f12e')
    .then((response) => {
      let meteo = response.data;
      console.log(meteo);
      dispatch({type: "FETCH_METEO_FULFILLED", payload: meteo });
    });
  }
}
