import { TUser } from "../../containers/SignIn/SignIn.types";

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