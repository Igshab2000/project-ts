import * as React from "react";
import {style} from './link.style'
import { ILinkProps } from "./link.types";
  
  const Link: React.FC<ILinkProps> = ({ onClick, styleCss, children, href }) => {
   
    return (
        <a
            className={style.link}
            onClick={onClick}
            style={styleCss}
            href={href}
        >
            {children}
        </a>
    );
  };
  
  export default Link;