export default function reducer(state={
    meteo: {},
    fetching: false,
    fetched: false,
    error: null,
  }, action) {

    switch (action.type) {
      case "FETCH_METEO": {
        return {...state, fetching: true}
      }
      case "FETCH_METEO_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
      case "FETCH_METEO_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          meteo: action.payload,
        }
      }
    }

    return state
}
