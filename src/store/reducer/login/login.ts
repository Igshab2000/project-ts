import { IStateLogin } from "./login.types";
import { ILoginAction } from "../../action/login";

const initState: IStateLogin = {
    token: '',

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

    