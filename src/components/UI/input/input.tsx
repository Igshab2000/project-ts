import * as React from "react";
import {style} from './input.style'
import { Field, BaseFieldProps, WrappedFieldProps } from "redux-form";

interface IInputProps extends Partial<WrappedFieldProps> {
    name?: string,
    styleCss?: Object,
    type?: string
    value?: string | number,
    placeholder?: string,
  
    // onChange?: (e: React.ChangeEvent) => void ,
    errorMessage?: string,
    valid?: boolean, 
    touched?: boolean,
    shouldValidate?: boolean
  }

  
  const Input: React.FC<IInputProps> = props => {
    const {input} = props;
    return (
        <div className={style.inputContainer}>
          <input
            type={props.type}
            className={style.input}
            placeholder={props.placeholder}
            style={props.styleCss}
            {...input}
          />
          {props.meta?.touched && props.meta.invalid ? <span className={style.span}>{props.meta.error}</span> : null}
        </div>
    );
  };

  const InputField: React.FC<IInputProps & BaseFieldProps> = props => {
    return (
      <Field name={props.name} component={Input} {...props} />
    ) 
  };
  
  export default InputField;