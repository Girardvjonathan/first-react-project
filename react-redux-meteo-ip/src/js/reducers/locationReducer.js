export default function reducer(state={
    location: {},
    fetching: false,
    fetched: false,
    error: null,
  }, action) {

    switch (action.type) {
      case "FETCH_LOCATION": {
        return {...state, fetching: true}
      }
      case "FETCH_LOCATION_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
      case "FETCH_LOCATION_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          location: action.payload,
        }
      }
    }

    return state
}
