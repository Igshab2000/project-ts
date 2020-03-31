import * as React from "react";
import { style } from "./field-process.style";
import { IFieldProcessProps } from "./field-process.types";

const FieldProcess: React.FC<IFieldProcessProps> = ({svgComponent, header, text, styleCss}) => {
    const Svg = svgComponent;
    return (
        <div className={style.container}>
            <div className={style.header} style={styleCss}>
                <Svg/>
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