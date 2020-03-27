import * as React from "react";
import {style} from './label.style'

interface ILabelProps {
    styleCss: Object,
    children?: string,
  }

  const Label: React.FC<ILabelProps> = ({ styleCss, children}) => {
   
    return (
        <p
            className={style.label}
            style={styleCss}
        >
            {children}
        </p>
    );
  };
  
  export default Label;