import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
import { loadAuthToken } from './async-storage';
import { setAuthToken, refreshAuthToken } from './actions/auth'

// Import Reducers
import registrationReducer from './reducers/registration';
import authReducer from './reducers/auth';

const rootReducer = combineReducers({
    registration: registrationReducer,
    auth: authReducer,
    form: formReducer
});
const store = createStore(rootReducer, applyMiddleware(thunk));

const authToken = loadAuthToken();
if (authToken) {
    const token = authToken;
    store.dispatch(setAuthToken(token));
    store.dispatch(refreshAuthToken());
}

export default store;