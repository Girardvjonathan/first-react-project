import dispatcher from "../dispatcher";
import axios from 'axios';


export function getIP() {
  // axios("http://someurl.com/somedataendpoint").then((data) => {
  //   console.log("got the data!", data);
  // })

  axios.get('https://api.ipify.org?format=json').then((response) => {
    let ip = response.data.ip;
    dispatcher.dispatch({type: "RECEIVE_IP", ip: ip });
  });
}
