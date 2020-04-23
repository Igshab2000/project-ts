import * as React from "react";
import { style } from "./FieldProcess.style";
import { IFieldProcessProps } from "./FieldProcess.types";

const FieldProcess: React.FC<IFieldProcessProps> = ({svgComponent, header, text, styleCss}) => {
    const Svg = svgComponent;
    return (
        <div className={style.container}>
            <div className={[style.header, styleCss].join(' ')} >
                <Svg style={style.svg}/>
                <span className={style.headerText}>
                    {header}
                </span>
            </div>
            <div className={style.floor}>
                <span className={style.text}>
                    {text}
                </span>
            </div>
        </div>
    )
}

export default FieldProcess;