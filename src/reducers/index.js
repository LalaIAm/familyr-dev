import {combineReducers} from 'redux'
import authResolver from './auth.resolver'

const rootReducer = combineReducers({
    auth: authResolver
})

export default rootReducer;