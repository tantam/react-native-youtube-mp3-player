/**
 * Created by kei on 13/2/17.
 */
export default function createReducer(initialState, handlers) {
    return (state = initialState, action) => {
        if(handlers[action.type])
            return handlers[action.type](state, action);

        return state;
    }
}
