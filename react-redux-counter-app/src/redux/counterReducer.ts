
// A reducer is a function that takes 2 parameters.
// 1. current state maintained in the store
// 2. action (to be performed on the state)
// Each of the reducers are automatically called/invoked by redux, when an "action" is "dispatched".

// When an action is dispatched, redux executes the reducer function, by supplying the current state from the store
// and the action dispatched itself.

// An action is a plain JS object with "type" and "payload" as properties.

// The reducer must return a new state based on the action.type. The return value from this reducer
// goes back to the store as the new state.

const initialState = {
    count: 0
}

interface IAction {
    type: string,
    payload?: any
}

function counterReducer(state = initialState, action: IAction) {
    console.log('counterReducer() called with state', state, 'and action', action)
    if (action.type === 'INC') {
        return { ...state, count: state.count + 1 }
    }
    if (action.type === 'DEC') {
        return { ...state, count: state.count - 1 }
    }
    if (action.type === 'DOUBLE_UP') {
        return { ...state, count: 2 * state.count }
    }

    return { ...state }
}

export default counterReducer;