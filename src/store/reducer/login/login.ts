import { onlyEmail, passLength } from "../../../utils/validator";
import { IStateLogin } from "./login.types";



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
            state.token = action.payload?.token;
            state.user = action.payload.user;
            return state;
        }
        default: 
            return state
    }
}