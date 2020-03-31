import { ISignUpProps } from "../sign-up/sign-up.types";
import { TUser } from "../sign-in/sign-in.types";

export type TEditUserDispatchProps = {
  editUser (payload: TUser): any;
};

export interface IUserPageState {
  userFields: Array<string>
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
    listInput: Array<IItemSign>
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
  