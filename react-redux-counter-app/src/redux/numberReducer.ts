
const initialState = {
    num: 0
}

interface IAction {
    type: string,
    payload?: any
}

// the reducer method is synchronous
// and the reducer must not mutate the state, instead, make a copy, and return a copy of the modified state
function numberReducer(state = initialState, action: IAction) {
    console.log('numberReducer() called with state', state, 'and action', action)
    switch (action.type) {
        case 'NUM_INC': return { ...state, num: state.num + 1 }
        case 'NUM_DEC': return { ...state, num: state.num - 1 }
        case 'NUM_DOUBLE_UP': return { ...state, num: 2 * state.num }
    }


    return { ...state }
}

export default numberReducer;