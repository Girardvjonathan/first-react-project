import React from "react";
import IP from "./components/IP";
import * as MeteoIPActions from "./actions/MeteoIPActions";
import MeteoIPStore from "./stores/MeteoIPStore";

export default class MeteoIP extends React.Component {
  constructor() {
    super();
    this.getIP = this.getIP.bind(this);
    this.state = {
      ip: MeteoIPStore.getIP(),
    };
    MeteoIPActions.getIP();

  }

  componentWillMount() {
    MeteoIPStore.on("change", this.getIP);
  }

  componentWillUnmount() {
    MeteoIPStore.removeListener("change", this.getIP);
  }

  getIP() {
    this.setState({
      ip: MeteoIPStore.getIP(),
    });
  }

  render() {
    const { ip } = this.state;

    // const TodoComponents = todos.map((todo) => {
    //     return <Todo key={todo.id} {...todo}/>;
    // });
    return (
      <div>
        <h3>Hello this is the MeteoIP page</h3>
        <IP ip={ip} />
      </div>

    );
  }
}
