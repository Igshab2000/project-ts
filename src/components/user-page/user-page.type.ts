import { ISignUpProps } from "../sign-up/sign-up.types";

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
    user: IUser
  }

  export interface IUser {
    [key: string]: string
}
  
  export interface IItemSign {
      name: string,
      placeholder: string,
      type: string,
      typeValidation?: any
  }
  