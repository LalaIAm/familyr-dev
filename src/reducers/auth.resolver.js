import { SET_AUTH_USER, LOGOUT_USER } from '../actions/auth.actions'

const initUser = JSON.parse(localStorage.getItem('user'))

const authResolver = (state = initUser, action) => {
  switch (action.type) {
    case SET_AUTH_USER:
      return {
        ...state,
        authUser: action.payload,
      }
    case LOGOUT_USER:
      return {
        ...state,
        authUser: null,
      }
    default:
      return state
  }
}

export default authResolver;