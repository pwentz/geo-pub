const initialState = { userLocation: '', venues: [], mountedVenue: '' }
const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'SET_COORDINATES':
      return {
        ...state,
        userLocation: action.data
      }

    case 'ADD_VENUE':
      const currentVenues = [...state.venues, action.data]
      return {
        ...state,
        venues: currentVenues
      }

    case 'SET_VENUES':
      return {
        ...state,
        venues: action.data
      }

    case 'SET_VENUE':
      return {
        ...state,
        mountedVenue: action.data
      }

    default:
      return state
  }
}

export default reducer;
