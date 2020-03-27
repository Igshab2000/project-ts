import { createStore, combineReducers } from 'redux';
import { LoginReducer } from './reducer/login';
import { RegistrationReducer } from './reducer/registration'
import {composeWithDevTools} from "redux-devtools-extension";
import { reducer as formReducer } from "redux-form"


const reducers = combineReducers({
    login: LoginReducer,
    registration: RegistrationReducer,
    form: formReducer
})

  const store = createStore(reducers, composeWithDevTools());

  export default store;