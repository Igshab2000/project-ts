import { IUser } from "../reducer/login/login.types"

export interface ILoginAction {
    type: string,
    payload: IPayload
}

export interface IPayload {
    token: string,
    user: IUser
}

const login = (payload: IPayload): ILoginAction => {
    return {
        type: 'loginUser',
        payload
    }
}

export default login