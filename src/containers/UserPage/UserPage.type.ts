import { ISignUpProps } from "../SignUp/SignUp.types";
import { TUser } from "../SignIn/SignIn.types";

export type TEditUserDispatchProps = {
  editUser (payload: TUser): any;
};

export interface IUserPageState {
  listInput: Array<IItemSign>
}

  export interface IUserElement {
    [key: string]: IUserElementValue;
  }

  export interface IUserElementValue {
    value: string;
    placeholder: string;
    type: string;
    name: string;
  }

  export interface IPropsUserPage  extends ISignUpProps{
    user: IUser,
    editUser: any
  }

  export interface IUser {
    [key: string]: string

  }

  export interface IEditUser {
    User: TUser
  }
  
export interface IItemSign {
  name: string,
  placeholder: string,
  type: string,
  typeValidation?: any
}

export interface IEditUserVariables {
  id: number,
  email: string;
  firstName: string;
  secondName: string;
  password: string;
}
  