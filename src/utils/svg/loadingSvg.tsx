import * as React from "react";
import { IPropsSvg } from './svg.types';

const LoadingSvg: React.FC<IPropsSvg> = props => {
    const { style } = props;

    return (
        <svg className={style} width="16" height="19" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M11 2.99994L6.5 5.59802V4.18896C3.91211 4.85504 2 7.20416 2 9.99994C2 12.2527 3.24146 14.2154 5.07751 15.2413L3.13513 16.3513C1.229 14.8891 0 12.588 0 9.99994C0 6.09436 2.79858 2.84241 6.5 2.14032V0.401855L11 2.99994ZM10.9225 4.75854C12.7585 5.78448 14 7.74719 14 9.99994C14 12.7957 12.0879 15.1448 9.5 15.8109V14.4019L5 16.9999L9.5 19.598V17.8596C13.2014 17.1575 16 13.9055 16 9.99994C16 7.41187 14.771 5.11078 12.8649 3.64856L10.9225 4.75854Z" fill="#535374"/>
        </svg>

    )
}  

export default LoadingSvg;

