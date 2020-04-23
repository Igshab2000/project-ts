import * as React from "react";
import {style, passwordFieldIconStyle } from './Input.style'
import { Field, BaseFieldProps } from "redux-form";
import { IInputProps, IInputState } from "./Input.types";
import Eye from "../Eye/Eye";

  class InputComponent extends React.PureComponent<IInputProps, IInputState> {
    constructor(props: IInputProps) {
      super(props)

      this.state = {
        type: props.type || "text"
      }
    }

    private getEyeIcon = () =>  {
      const { type } = this.props;
    
      if (type === "password") {
        return (
          <Eye
            key="eye"
            closed={this.state.type === "password"}
            onClick={() => this.handleEyeClick()}
            style={passwordFieldIconStyle}
          />
        );
      }
    
      return null;
    }

    private handleEyeClick = () => {
      const isCheckClosed = this.state.type === 'password';

      this.setState({
        type: isCheckClosed ? 'text' : 'password'
      })
    }

    public render() {
      const {input} = this.props;
      const passwordStyleClassName = this.props.type === "password" ? style.passwordFieldInputZoneStyle : [];
      return (
        <div className={[style.inputContainer, this.props.styleCss].join(" ")}>
          <input
            type={this.state.type}
            className={[style.input, passwordStyleClassName].join(" ")}
            placeholder={this.props.placeholder}
            {...input}
          />
          {this.getEyeIcon()}
          {this.props.meta?.touched && this.props.meta.invalid ? <span className={style.span}>{this.props.meta.error}</span> : null}
        </div>
    );
   }
  }

  const InputField: React.FC<IInputProps & BaseFieldProps> = props => {
    return (
      <Field name={props.name} component={InputComponent} {...props} />
    ) 
  };
  
  export default InputField;