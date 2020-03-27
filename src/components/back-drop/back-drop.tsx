import * as React from "react";
import {BackDropStyle} from './back-drop.style'

interface IBackDropProps {
    onClick: (e: React.MouseEvent) => void

}
  
  const BackDrop: React.FC<IBackDropProps> = ({onClick}) => {

    return (
        <div 
            className={BackDropStyle}
            onClick={onClick}
        />
    )
  };
  
  export default BackDrop;