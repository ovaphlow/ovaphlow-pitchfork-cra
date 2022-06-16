export const reducer = (state, action) => {
    if (action.type === "set") {
        return {
            ...state,
            [action.key]: action.value,
        };
    } else {
        return state;
    }
}
