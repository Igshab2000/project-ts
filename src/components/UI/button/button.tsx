import * as React from "react";
import {style} from './Button.style'
import { IButtonProps } from "./Button.types";
  
  const Button: React.FC<IButtonProps> = ({ onClick, styleCss, children, type }) => {
   
    return (
        <button
            className={
              type !== 'disabled' ? 
                [style.button, styleCss].join(' ') 
              : 
                [style.button, style.buttonDisabled, styleCss].join(' ') 
            }
            onClick={onClick}
        >
            {children}
        </button>
    );
  };
  
  export default Button;