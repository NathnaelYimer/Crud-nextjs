// reducers.js
import { combineReducers } from 'redux';

// Example reducer
const initialState = {
  items: []
};

const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        items: [...state.items, action.payload]
      };
    case 'DELETE_ITEM':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload)
      };
    default:
      return state;
  }
};

export default combineReducers({
  items: itemsReducer
});
    