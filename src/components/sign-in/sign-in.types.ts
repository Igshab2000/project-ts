import { InjectedFormProps} from "redux-form";

export type TLoginDispatchProps = {
    login(payload: any): any;
};

export type TOwnProps = {};

export type TFormData = {
    loginField: string;
    passwordField: string;
    firstNameField?: string;
    lastNameField?: string;

  };

export interface IProps
  extends InjectedFormProps<
  TFormData,
      TOwnProps & TLoginDispatchProps
    >,
    TOwnProps,
    TLoginDispatchProps {}

export interface ISignState {
    formControls: Array<IItemSign>
}

export interface IItemSign {
    name: string,
    placeholder: string,
    type: string,
    typeValidation?: any
}

export interface ILogin {
    token: String;
    user: TUser;
}

export type TUser = {
    id: number;
    firstName: string;
    secondName: string;
    email: string;
};

export interface ILoginVariables {
    email: string;
    password: string;
}
