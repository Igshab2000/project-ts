import * as React from "react";
import {style} from './Label.style'
import { ILabelProps } from "./Label.types";


const Label: React.FC<ILabelProps> = ({ styleCss, children}) => {
   
    return (
        <p
            className={[style.label, styleCss].join(' ')}
        >
            {children}
        </p>
    );
  };
  
export default Label;