import { onlyEmail, passLength } from "../../utils/validator";

export interface IStateLogin {
    token: string,
    listInput: Array<IItemSign>,
    user: IUser
}

export interface IItemSign {
    name: string,
    placeholder: string,
    type: string,
    typeValidation?: any
}

export interface IUser {
    firstName: string,
    secondName: string,
    email: string,
    password: string
}

const initState: IStateLogin = {
    token: '',
    listInput: [
        {
            type: 'email',
            placeholder: 'Электронная почта',
            name: 'loginField',
            typeValidation: onlyEmail
        },
        {
            type: 'password',
            placeholder: 'Пароль',
            name: 'passwordField',
            typeValidation: passLength(8)

        }
    ],
    
    user: {
        firstName: '',
        secondName: '',
        email: '',
        password: ''
    }
}

export const LoginReducer = (state: IStateLogin = initState, action: any ) => {
    switch(action.type) {
        case 'loginUser': {
            state.token = action.payload.token;
            state.user = action.payload.user;
            return state;
        }
        default: 
            return state
    }
}