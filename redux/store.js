// store.js
import { createStore } from 'redux';
import { Provider } from 'react-redux'; // Import Provider
import rootReducer from './reducers'; // Import your root reducer

const store = createStore(rootReducer); // Create your Redux store with the root reducer

export default store;
