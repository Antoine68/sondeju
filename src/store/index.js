import {combineReducers, createStore} from 'redux'
import {AuthReducer} from './authReducer'


 export default createStore(
      combineReducers({
          user: AuthReducer
      })
  )

