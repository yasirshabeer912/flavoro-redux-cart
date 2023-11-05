
const InitialState = {
    search: ""
}
// console.log(InitialState);

export const SearchReducer = (state = InitialState, action) => {
    switch (action.type) {
        case "SEARCH":
            return {
                search :action.payload
            }

        default:
            return state
    }
}