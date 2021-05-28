import {Types} from './constants'

export const ActionCreators = {

    addConnection: (user) => ({ type: Types.ADD_USER, payload: { user } }),

    updateConnection: (user) => ({ type: Types.UPDATE_USER, payload: { user } }),

    removeConnection: (user) => ({ type: Types.REMOVE_USER, payload: {} }),
  }