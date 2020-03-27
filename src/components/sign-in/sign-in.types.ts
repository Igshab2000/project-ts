import { InjectedFormProps} from "redux-form";
import { ILogin } from "./sign-in";

export type TLoginDispatchProps = {
    login(payload: any): any;
};

export type TOwnProps = {};

export type TFormData = {
    loginField: string;
    passwordField: string;
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

