import {combineReducers, createStore} from 'redux'
import {AuthReducer} from './authReducer'

 export default createStore(
      combineReducers({
          auth: AuthReducer
      })
  )

  /*
 export default createStore(auth)
  */