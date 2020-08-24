import {combineReducers} from 'redux'
import CakeReducer from './cake/CakeReducer'
import iceCreamReducer from './icecream/iceCreamReducer'
import { userReducer } from './user/UserReducer'

export const rootReducer = combineReducers ({
    cake : CakeReducer,
    iceCream : iceCreamReducer,
    user: userReducer
})