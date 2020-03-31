import { IEditUserAction } from "../../action/edit-user"

export const EditUserReducer = (state = {}, action: IEditUserAction ) => {
    switch(action.type) {
        case 'editUser':
            return {
                ...state,
                user: action.payload
            }
        default: 
            return state
    }
}