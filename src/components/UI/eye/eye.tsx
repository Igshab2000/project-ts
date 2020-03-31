import * as React from 'react';
import { IEyeProps } from './eye.types';
import ClosedEyeSvg from '../../../utils/svg/eyeClosedSvg';
import OpenEyeSvg from '../../../utils/svg/openEyeSvg';

const Eye: React.FC<IEyeProps> = (props) => {
    return (
        <span onClick={props.onClick} style={props.style}>
            {props.closed ? <ClosedEyeSvg/> : <OpenEyeSvg/>}
        </span>
    )
}

export default Eye;