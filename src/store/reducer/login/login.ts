import { onlyEmail, passLength } from "../../../utils/validator";
import { IStateLogin } from "./login.types";
import { ILoginAction } from "../../action/login";



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
        id: 0,
        firstName: '',
        secondName: '',
        email: '',
    }
}

export const LoginReducer = (state: IStateLogin = initState, action: ILoginAction ) => {
    switch(action.type) {
        case 'loginUser': 
            return { 
                ...state, 
                token: action.payload?.token, 
                user: action.payload.user 
            }
        default: 
            return state
    }
}

    