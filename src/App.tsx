import React from 'react';
import LayoutUser from './hoc/Layouts/layout-user/layout-user';
import SignIn from './components/sign-in/sign-in';
import SignUp from './components/sign-up/sign-up';
import {Switch, Route} from 'react-router-dom';
import { Provider as ReduxProvider, connect, MapStateToProps } from "react-redux";
import store from "./store/index.store";
import ApolloClient, { Operation } from 'apollo-boost';
import { gql } from "apollo-boost";
import { ApolloProvider } from '@apollo/react-hooks';

export interface IAppProps {}

const client = new ApolloClient({
    uri: 'http://localhost:4000/api',
    request: (operation: Operation) => {
      const token = localStorage.getItem("token");
      operation.setContext({
        headers: {
          authorization: token ? `Bearer ${token}` : ""
        }
      })
    }
  });


function App(props: any) {

  let routes = (
    <Switch>
      <Route path="/sing-up" component={SignUp}/> 
      <Route path="/" component={SignIn}/>
    </Switch>
  )

  if(props.token) {
    routes = (
      <Switch>
        <Route path="/layout" component={LayoutUser}/>
      </Switch>
    )
  }

  return (
    <ApolloProvider client={client}>
      {routes}
    </ApolloProvider>
  );
}

const mapStateToProps: MapStateToProps<any, IAppProps> = (
  state: any,
) => {
  return {
      token: state.login.token
  };
};

export default connect(mapStateToProps)(App);
