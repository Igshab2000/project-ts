import { TUser } from "../../components/sign-in/sign-in.types";

export interface IEditUserAction {
    type: string,
    payload: TUser
}

const editUser = (payload: TUser): IEditUserAction => {
    return {
        type: 'editUser',
        payload
    }
}

export default editUser;