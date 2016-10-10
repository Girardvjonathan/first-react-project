import { EventEmitter } from "events";

import dispatcher from "../dispatcher";

class MeteoIPStore extends EventEmitter {
  constructor() {
    super()
    this.ip = "0.0.0.0"
  }

  getIP() {
    return this.ip;
  }

  handleActions(action) {
    switch(action.type) {
      case "RECEIVE_IP": {
        this.ip = action.ip;
        this.emit("change");
        break;
      }
    //   case "RECEIVE_TODOS": {
    //     this.todos = action.todos;
    //     this.emit("change");
    //     break;
    //   }
    }
  }

}

const meteoIPStore = new MeteoIPStore;
dispatcher.register(meteoIPStore.handleActions.bind(meteoIPStore));

export default meteoIPStore;
