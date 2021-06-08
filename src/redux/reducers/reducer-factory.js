export const createReducer = (strategyMap, initialState) =>
    (state = initialState, action) => (strategyMap[action.type] ?? strategyMap.__default__ )(state, action)
// apply strategy pattern