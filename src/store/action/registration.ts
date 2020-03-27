import { ThunkDispatch } from 'redux-thunk'
import {Action} from 'redux';

const Registration = (firstName: string, lastName: string, email: string, password: string | number): any => {
    return (dispatch: ThunkDispatch<{}, undefined, Action>) => {
        const dateLogin = {
            firstName,
            lastName,
            email,
            password
        }
    }
}

export default Registration