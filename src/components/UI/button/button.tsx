import * as React from "react";
import {style} from './button.style'

interface IButtonProps {
    onClick?: (e: React.MouseEvent) => void,
    styleCss?: Object,
    children?: string,
    type?: string
  }
  
  const Button: React.FC<IButtonProps> = ({ onClick, styleCss, children, type }) => {
   
    return (
        <button
            className={type !== 'disabled' ? style.button : style.button + ' ' + style.buttonDisabled}
            onClick={onClick}
            style={styleCss}
        >
            {children}
        </button>
    );
  };
  
  export default Button;