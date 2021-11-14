export const SET_AUTH_USER = 'SET_AUTH_USER'
export const LOGOUT_USER = 'LOGOUT_USER';


export const setAuthUser = user => ({
    type: SET_AUTH_USER,
    payload: user
})

export const logoutUser = () => ({
    type: LOGOUT_USER
})