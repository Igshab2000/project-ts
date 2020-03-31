import { WrappedFieldProps } from "redux-form";

 export interface IInputProps extends Partial<WrappedFieldProps> {
    name?: string,
    styleCss?: Object,
    type?: string
    value?: string | number,
    placeholder?: string,
    errorMessage?: string,
    valid?: boolean, 
    touched?: boolean,
    shouldValidate?: boolean
}

export interface IInputState {
    type: string
}