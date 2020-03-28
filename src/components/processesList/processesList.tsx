import * as React from "react";
import { IProcessListProps, TProcessListData } from "./processList.types";
import { useQuery, useMutation } from "@apollo/react-hooks";
import {processListQuery} from "../../query/processList";
import { map } from "lodash";
import { MapStateToProps, connect } from "react-redux";
import { TOwnProps } from "../sign-in/sign-in.types";

const ProcessList: React.FC<IProcessListProps> = props => {

  const { loading, data, error } = useQuery<TProcessListData>(
    processListQuery,
  );

// test mutation
//   const [addTodo, result] = useMutation<{}, { id: number; str: string }>(
//     processListQuery
//   );

//   console.log(result.processList)

  if (loading) {
    return <p>...загрузка</p>;
  }

  if (error) {
    console.log('process ID', props.userId)
    return <p>Ошибка: {error.message}</p>;
  }

  console.warn('process Data', data?.processList);

  return (
    <div
    //   onClick={(e: any) => {
    //     addTodo({
          
    //     });
    //   }}
    >
      {/* {map(data?.processList, process => (
        <ProcessComponent/>
      ))} */}
    </div>
  );
};

const ProcessComponent: React.FC<any> = () => {
  return (
      <h1>Process</h1>
  )
};

const mapStateToProps: MapStateToProps<any, TOwnProps> = (
    state: any,
  ) => {
      //console.log(state.login.user.id)
    return {
        userId: state.login.user.id
    }
  };
  

const ConnectedSignUp = connect<
    any
>(
    mapStateToProps,
)(ProcessList)


export default ConnectedSignUp;
