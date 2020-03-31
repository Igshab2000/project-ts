import * as React from "react";
import { style } from './processesList.style';
import { IProcessListProps, TProcessListData } from "./processList.types";
import { useQuery } from "@apollo/react-hooks";
import {processListQuery} from "../../query/processList";
import { MapStateToProps, connect } from "react-redux";
import { TOwnProps } from "../sign-in/sign-in.types";
import ProcessComponent from '../process-component/process-component';
import LayoutUser from '../../hoc/Layouts/layout-user/layout-user';

const ProcessList: React.FC<IProcessListProps> = props => {

  const { loading, data, error } = useQuery<TProcessListData>(processListQuery);

  if (loading) {
    return <p>...загрузка</p>;
  }

  if (error) {
    return <p>Ошибка: {error.message}</p>;
  }

  console.warn('process Data', data?.processList);

  return (
    <LayoutUser>
      <div className={style.ProcessList}> 
        {data?.processList.map(process => (
          <ProcessComponent key={process.id} processData={process}/>
        ))}
      </div>
    </LayoutUser>
  );
};
  

export default ProcessList;
