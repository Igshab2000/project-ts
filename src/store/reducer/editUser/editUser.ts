import { IEditUserAction } from "../../action/editUser"

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