import * as React from "react";
import { style } from './ProcessComponent.style'
import FieldProcess from './FieldProcess/FieldProcess'
import ClockSvg from '../../utils/svg/clockSvg';
import Employees from '../../utils/svg/employees';
import LoadingSvg from '../../utils/svg/loadingSvg';
import ScriptSvg from '../../utils/svg/scriptSvg';
import TimerSvg from '../../utils/svg/timerSvg';
import VectorSvg from '../../utils/svg/vectorSvg';
import ProcessDate from './ProcessDate/ProcessDate';
import { IProcessComponentProps } from "./ProcessComponent.types";
import { month, employeeDeclension, processDeclension } from "./ProcessComponent.consts";

const showFieldProcess: any = (svg: React.FC, header: number | string, text: string, styleCss:object) => {
    return (
        <FieldProcess
            svgComponent={svg}
            header={header}
            text={text}
            styleCss={styleCss}
        />
    )
} 

const getWord = (number: number, arrayWords: Array<string>) =>  {
    number = Math.abs(number);
    number %= 100;
    if (number >= 5 && number <= 20) {
        return arrayWords[2];
    }
    number %= 10;
    if (number == 1) {
        return arrayWords[0];
    }
    if (number >= 2 && number <= 4) {
        return arrayWords[1];
    }
    return arrayWords[2];
}

const transferNumber = (number: number) => {
    let str = '' + number;
    
    if(str.length > 3) {
        return str.slice(0, str.length - 3) + ' ' + str.slice(str.length - 3);
    }

    return str;
}

const getPercentagetime = (leadTime: number, activeTime: number) => {
    return ' ( ' + (activeTime / leadTime * 100).toFixed(1) + ' %)';
}

const transferTime = (time: number) => {
    time *= 1000;
    const date = new Date(time);
    return  date.getHours() +'ч '+  date.getMinutes() + ' мин';  
}

const transferDate = (time: number) => {
    time *= 1000;
    const date = new Date(time);
    return date.getDate() + ' ' + month[+date.getMonth()] + ' ' + date.getFullYear();
}

const ProcessComponent: React.FC<IProcessComponentProps> = ({processData}) => {
    const {
        name,
        numberOfExecutions,
        averageLeadTime,
        averageActiveTime,
        employeesInvolvedProcess,
        numberOfScenarios,
        start,
        end,
        loading
    } = processData;

    return (
        <div className={style.container}>
            <div className={style.containerHeader}>
                <span className={style.header}>
                    {name}
                </span>
                <span className={style.headerLink}>
                    На карту процесса
                    <VectorSvg/>
                </span>
            </div>
            <div className={style.containerContant}>
                <div className={style.containerContantProcess}>
                    {showFieldProcess(
                        LoadingSvg, 
                        transferNumber(numberOfExecutions), 
                        'выполнено раз', 
                        style.fieldProcessFirst
                        )}
                </div>
                <div className={style.containerContantColumn}>
                    <div className={style.containerContantColumnFirst}>
                        {showFieldProcess(
                            ClockSvg, 
                            transferTime(+averageLeadTime), 
                            'среднее время выполнения', 
                            style.fieldProcessSecond
                            )}
                    </div>
                    <div>
                        {showFieldProcess(
                            TimerSvg, 
                            transferTime(+averageActiveTime) + 
                            getPercentagetime(+averageLeadTime, +averageActiveTime), 
                            'среднее активное время', 
                            style.fieldProcessSecond
                        )}
                    </div>
                </div>
                <div className={style.containerContantColumn}>
                    <div className={style.containerContantColumnFirst}>
                        {showFieldProcess(
                            Employees, 
                            employeesInvolvedProcess + 
                            getWord(employeesInvolvedProcess, employeeDeclension), 
                            'участвует в процессе', 
                            style.fieldProcessSecond
                        )}
                    </div>
                    <div>
                        {showFieldProcess(
                                ScriptSvg, 
                                numberOfScenarios + 
                                getWord(numberOfScenarios, processDeclension), 
                                'в процессе', 
                                style.fieldProcessSecond
                        )}
                    </div>
                </div>
                <div className={style.containerContantColumn}>
                    <ProcessDate label='Начало' date={transferDate(+start)} />
                    <ProcessDate label='Окончание' date={transferDate(+end)} />
                    <ProcessDate label='Загрузка' date={transferDate(+loading)} />
                </div>
            </div>
        </div>
    )
};

export default ProcessComponent;