import * as React from "react";
import {style} from './button.style'
import { IButtonProps } from "./button.types";
  
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