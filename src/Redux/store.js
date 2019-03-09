import { createStore, combineReducers } from 'redux';
import submittedValueReducer from './reducers/submittedValueReducer';

// Combine reducers allows multiple reducers to be used with createStore, as shown below in
// 'export const store = createStore(...);'.
const allReducers = combineReducers({
    submittedValue: submittedValueReducer
});

// createStore takes in 3 parameters: 1. Reducer 2. preloadedState 3. Enhancer.
// In this case: 
// 1. Is the allReducer defined above
// 2. Are the intial values of the state within the redux store
// 3. Allows the store to be viewed within the Redux Tools Extension, a very useful must-have tool when working with Redux.
// https://redux.js.org/api/createstore
export const store = createStore(
    allReducers,
    {
        submittedValue: ')sdrawkcaB ti daeR( Nothing has been submitted yet'
    },
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);