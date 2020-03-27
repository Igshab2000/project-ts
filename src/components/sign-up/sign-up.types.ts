import { InjectedFormProps } from "redux-form";
import { TFormData, TOwnProps } from "../sign-in/sign-in.types";

export type TRegistrationDispatchProps = {
    registration(firstName: string, lastName: string, email: string, password: string): any;
};

export interface ISignUpProps  extends InjectedFormProps<
TFormData,
    TOwnProps & TRegistrationDispatchProps
  >,
  TOwnProps,
  TRegistrationDispatchProps {}
  
export interface ISignState {
    listInput: Array<IItemSign>
}

export type TStateProps = {
    listInput: Array<IItemSign>
}

export interface IItemSign {
    name: string,
    placeholder: string,
    type: string,
    typeValidation?: any
}