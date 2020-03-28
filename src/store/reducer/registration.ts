import { onlyEmail, passLength } from "../../utils/validator";

export interface IStateLogin {
    signup: string,
    listInput: Array<IItemSign>
}

export interface IItemSign {
    name: string,
    placeholder: string,
    type: string,
    typeValidation?: any
}

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

export const RegistrationReducer = (state: IStateLogin = initState, action: any ) => {
    switch(action.type) {
        case 'userRegistration':
            state.signup = action.layout
        default: 
            return state
    }
}