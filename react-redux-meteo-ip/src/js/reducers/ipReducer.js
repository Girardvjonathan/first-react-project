export default function reducer(state={
    ip: "0.0.0.0",
    fetching: false,
    fetched: false,
    error: null,
  }, action) {

    switch (action.type) {
      case "FETCH_IP": {
        return {...state, fetching: true}
      }
      case "FETCH_IP_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
      case "FETCH_IP_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          ip: action.payload,
        }
      }
    }

    return state
}
