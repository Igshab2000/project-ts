import { createStore, combineReducers } from 'redux';
import { LoginReducer } from './reducer/login/login';
import { EditUserReducer } from './reducer/edit-user/edit-user';
import { RegistrationReducer } from './reducer/registration/registration'
import {composeWithDevTools} from "redux-devtools-extension";
import { reducer as formReducer } from "redux-form"


const reducers = combineReducers({
    login: LoginReducer,
    registration: RegistrationReducer,
    editUser: EditUserReducer,
    form: formReducer
})

  const store = createStore(reducers, composeWithDevTools());

  export default store;