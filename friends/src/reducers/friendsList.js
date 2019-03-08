import {
    LOGGING_IN,
    LOGIN_SUCCESSFUL,
    FETCHING_FRIENDS,
    FETCHING_SUCCESSFUL,
    ERROR
} from '../actions'

const initialState = {
      deletingFriend: false,
      fetchingFriends: false,
      friends: [],
      isLoggedIn: null,
      loggingIn: false,
      savingFriends: false,
      updatingFriend: false,
      error: null
}

export const friendsList = (state = initialState, action) => {
    switch(action.type) {
        case ERROR:
            return {
                ...state, ...action.payload
            }
        case FETCHING_FRIENDS:
            return {
                ...state, fetchingFriends: true,
            }
        case FETCHING_SUCCESSFUL:
            return {
                ...state, fetchingFriends: false, friends: action.payload
            }
        case LOGGING_IN:
            return {
                ...state, loggingIn: true
            }
        case LOGIN_SUCCESSFUL:
            return {
                ...state, isLoggedIn: true, loggingIn: false
            }
        default:
            return state
    }
}