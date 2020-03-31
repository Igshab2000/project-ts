import { onlyEmail, passLength } from "../../../utils/validator";
import { IStateLogin } from "./registration.types";
import { IRegistrationAction } from "../../action/registration";

const initState: IStateLogin = {
    signup: '',
    listInput: [
        {name: 'firstNameField', placeholder: 'Имя', type: 'text'},
        {name: 'lastNameField', placeholder: 'Фамилия', type: 'text'},
        {name: 'loginField', placeholder: 'Электронная почта', type: 'email', typeValidation: onlyEmail},
        {name: 'passwordField', placeholder: 'Новый пароль', type: 'password', typeValidation: passLength(8)},
        {name: 'newPasswordField', placeholder: 'Повторите пароль', type: 'password', typeValidation: passLength(8)}
      ]
}

export const RegistrationReducer = (state: IStateLogin = initState, action: IRegistrationAction ) => {
    switch(action.type) {
        default: 
            return state
    }
}