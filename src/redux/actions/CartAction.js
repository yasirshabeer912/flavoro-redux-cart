export const ADD = (item) =>{
    return{
        type: 'ADD_TO_CART',
        payload: item
    }
}
export const DELETE = (item) =>{
    return{
        type: 'DELETE_FROM_CART',
        payload: item
    }
}
export const INCREMENT = (itemId) => {
    return {
      type: 'INCREMENT',
      payload: itemId,
    };
  };
export const DECREMENENT = (itemId) => {
    return {
      type: 'DECREMENENT',
      payload: itemId,
    };
  };
  
