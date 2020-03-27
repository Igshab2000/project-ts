import * as React from "react";
import {style} from './link.style'

interface ILinkProps {
    onClick?: (e: React.MouseEvent) => void,
    styleCss?: Object,
    children?: string,
    href: string
  }
  
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