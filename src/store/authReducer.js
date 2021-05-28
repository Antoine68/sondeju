import {Types} from './constants'

const initialState = {
    user: {
        connected : false,
        pseudo: '',
        name: '',
        firstname: '',
        mail : '',
        age: ''
    }
}

export function AuthReducer(state = initialState, action) {
    switch (action.type) {

        case Types.ADD_CONNECTION:
            return{
                    ...state,
                    user: action.payload.user
                }

        case Types.UPDATE_CONNECTION:
            return{
                    ...state,
                    user: action.payload.user
                }

        case Types.REMOVE_CONNECTION:
        return{}
    
        default:
        return state
    }
  }

export default AuthReducer;