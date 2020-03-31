import * as React from "react";
import { style } from "./process-date.style";
import { IProcessDateProps } from "./processDate.types";

const ProcessDate: React.FC<IProcessDateProps> = ({label, date}) => {
    return (
        <div className={style.processDate}>
            <span className={style.label}>{label}</span>
            <span className={style.date}>{date}</span>
        </div>
    )
}

export default ProcessDate;