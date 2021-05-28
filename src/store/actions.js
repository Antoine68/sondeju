import {Types} from './constants'

export const addConnection = user => {
    return{
        type: 'ADD_CONNECTION',
        payload: {user}
    };
};

export const updateConnection = user => {
    return{
        type: Types.UPDATE_USER,
        payload: {user} 
    }
}

export const removeConnection = user => {
    return{
        type: Types.REMOVE_USER,
        payload: {}
    }
}

/*
export const ActionCreators = {

    addConnection: (user) => ({ type: Types.ADD_USER, payload: { user } }),

    updateConnection: (user) => ({ type: Types.UPDATE_USER, payload: { user } }),

    removeConnection: (user) => ({ type: Types.REMOVE_USER, payload: {} }),
  }*/