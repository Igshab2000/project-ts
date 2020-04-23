import React from 'react';
import SignIn from './containers/SignIn/SignIn';
import SignUp from './containers/SignUp/SignUp';
import {Switch, Route} from 'react-router-dom';
import { connect, MapStateToProps } from "react-redux";
import ApolloClient, { Operation } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import UserPage from './containers/UserPage/UserPage';
import ProcessList from './containers/ProcessesList/ProcessesList'  

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
      <Route path="/sign-up" component={SignUp}/> 
      <Route path="/" component={SignIn}/>
    </Switch>
  )

  if(props.token) {
    routes = (
      <Switch>
        <Route path="/user-page" component={UserPage}/>
        <Route path="/process-list" component={ProcessList}/>
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
