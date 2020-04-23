import * as React from "react";
import { IErrorMessageProps } from "./ErrorMessage.types";
import { style } from './ErrorMessage.style';
import ErrorSvg from '../../utils/svg/errorSvg'


const ErrorMessage: React.FC<IErrorMessageProps> = ({errorMessge}) => {
    return (
        <div className={style.errorContainer}>
            <ErrorSvg />
            <span className={style.messge}>
                {errorMessge}
            </span>
        </div>
    )
}

export default ErrorMessage