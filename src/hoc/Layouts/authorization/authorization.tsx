import * as React from "react";
import {style} from './authorization.style';
import HeaderSvg from '../../../utils/svg/headerSvg';
import { IAuthorizationProps, IAuthorizationState } from "./authorization.types";


class Authorization extends React.PureComponent<IAuthorizationProps, IAuthorizationState> {
    public render() {
        return (
            <div className={style.container}>
                <div className={style.logo}>
                    <HeaderSvg/>
                </div>
                <main>
                    {this.props.children}
                </main>
            </div>
        )
    }
}

export default Authorization;