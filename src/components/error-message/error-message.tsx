import * as React from "react";
import { IErrorMessageProps } from "./error-message.types";
import { style } from './error-message.style';
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