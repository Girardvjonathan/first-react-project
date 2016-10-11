import { combineReducers } from "redux"

import ip from "./ipReducer"
import location from "./locationReducer"
import meteo from "./meteoReducer"

export default combineReducers({
  ip,
  location,
  meteo,
})
