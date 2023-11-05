import products from "../../db/data"

const InitialState = {
    products,
    carts: []
}
// console.log(InitialState);

export const CartReducer = (state = InitialState, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                carts: [...state.carts, { ...action.payload, quantity: 1 }]
            };
        case "INCREMENT":
            const itemId = action.payload;
            const updatedCart = state.carts.map((item) => {
                if (item.id === itemId) {
                    // Increase the quantity and update the price
                    return { ...item, quantity: item.quantity + 1 };
                }
                return item;
            });

            return {
                ...state,
                carts: updatedCart,
            };
        case "DECREMENENT":
            const decID = action.payload;
            const updatedDecCart = state.carts.map((item) => {
                if (item.id === decID) {
                    // Decrease the quantity and update the price, but ensure it's at least 1
                    const newQuantity = item.quantity - 1;
                    return { ...item, quantity: Math.max(newQuantity, 1) };
                }
                return item;
            });

            return {
                ...state,
                carts: updatedDecCart,
            };
        case "DELETE_FROM_CART":
            const deleteItemId = action.payload;
            const updatedCartDeletedItem = state.carts.filter((item) => item.id !== deleteItemId);

            return {
                ...state,
                carts: updatedCartDeletedItem,
            };


        default:
            return state
    }
}