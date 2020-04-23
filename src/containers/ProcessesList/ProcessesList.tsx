import * as React from "react";
import { style } from '../ProcessesList/ProcessesList.style';
import { IProcessListProps, TProcessListData } from "../ProcessesList/ProcessesList.types";
import { useQuery } from "@apollo/react-hooks";
import {processListQuery} from "../../query/processList";
import ProcessComponent from '../../components/ProcessComponent/ProcessComponent';
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
