import { createStore, combineReducers } from 'redux';
import { LoginReducer } from './reducer/login/login';
import { EditUserReducer } from './reducer/editUser/editUser';
import {composeWithDevTools} from "redux-devtools-extension";
import { reducer as formReducer } from "redux-form";


const reducers = combineReducers({
    login: LoginReducer,
    editUser: EditUserReducer,
    form: formReducer
})

  const store = createStore(reducers, composeWithDevTools());

  export default store;