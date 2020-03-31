import * as React from "react";
import { style } from './process-component.style'
import FieldProcess from './field-process/field-process'
import ClockSvg from '../../utils/svg/clockSvg';
import Employees from '../../utils/svg/employees';
import LoadingSvg from '../../utils/svg/loadingSvg';
import ScriptSvg from '../../utils/svg/scriptSvg';
import TimerSvg from '../../utils/svg/timerSvg';
import VectorSvg from '../../utils/svg/vectorSvg';
import ProcessDate from './process-date/process-date';
import { IProcessComponentProps } from "./process-component.types";

const month: Array<string> = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря'
];

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
    console.log(new Date(+processData.start).getFullYear());
    return (
        <div className={style.container}>
            <div className={style.containerHeader}>
                <span className={style.header}>
                    {processData.name}
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
                        processData.numberOfExecutions, 
                        'выполнено раз', 
                        { fontSize: '26px', lineHeight: '35px' })}
                </div>
                <div className={style.containerContantColumn}>
                    <div className={style.containerContantColumnFirst}>
                        {showFieldProcess(
                            ClockSvg, 
                            transferTime(+processData.averageLeadTime), 
                            'среднее время выполнения', 
                            { fontSize: '18px', lineHeight: '25px' })}
                    </div>
                    <div>
                        {showFieldProcess(
                            TimerSvg, 
                            transferTime(+processData.averageActiveTime) + getPercentagetime(+processData.averageLeadTime, +processData.averageActiveTime), 
                            'среднее активное время', 
                            { fontSize: '18px', lineHeight: '25px' })}
                    </div>
                </div>
                <div className={style.containerContantColumn}>
                    <div className={style.containerContantColumnFirst}>
                        {showFieldProcess(
                            Employees, 
                            processData.employeesInvolvedProcess + ' сотрудников', 
                            'участвует в процессе', 
                            { fontSize: '18px', lineHeight: '25px' })}
                    </div>
                    <div>
                        {showFieldProcess(
                                ScriptSvg, 
                                processData.numberOfScenarios + ' процессов', 
                                'в процессе', 
                                { fontSize: '18px', lineHeight: '25px' })}
                    </div>
                </div>
                <div className={style.containerContantColumn}>
                    <ProcessDate label='Начало' date={transferDate(+processData.start)} />
                    <ProcessDate label='Окончание' date={transferDate(+processData.end)} />
                    <ProcessDate label='Загрузка' date={transferDate(+processData.loading)} />
                </div>
            </div>
        </div>
    )
};

export default ProcessComponent;