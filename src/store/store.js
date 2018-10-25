import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';

import authReducer from './reducers/auth';

const rootReducer = combineReducers({
    auth: authReducer,
    form: formReducer
});
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;