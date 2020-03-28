import * as React from "react";
import MenuList from "../../../components/navigation/menuList/menu-list";
import BackDroup from "../../../components/back-drop/back-drop";
import {style} from './layout-user.style';
import UserPage from '../../../components/user-page/user-page';
import  ProcessList  from '../../../components/processesList/processesList';
import {Switch, Route} from 'react-router-dom';

export interface ILayoutProps {
  children?: React.ReactElement
}
export interface ILayoutState {
  isOpenMenu: boolean;
}

class LayoutUser extends React.Component<ILayoutProps, ILayoutState> {
  constructor(props: ILayoutProps) {
    super(props);

    this.state = {
      isOpenMenu: false
    };

    this.menuToggle = this.menuToggle.bind(this);
    //console.log('layout-user ', ProcessList);
  }

  public menuToggle() {
    this.setState({
      isOpenMenu: !this.state.isOpenMenu
    });
    
  }

  render() {
    return (
      <div className={style.layout}>
        <header className={style.layoutHeader}>
          <img
            src={
              this.state.isOpenMenu ? "/icon/menu-open.png" : "/icon/menu.png"
            }
            onClick={this.menuToggle}
            className={style.menuToggle}
          />
          <h2 className={style.h2}>Меню</h2>
        </header>
        <MenuList isOpen={this.state.isOpenMenu} onClick={this.menuToggle}/>
        <main className={style.main}>
          <Switch>
            <Route path="/layout/user-page" component={UserPage}/>
            <Route path="/layout/process-list" component={ProcessList}/>
          </Switch>
        </main>
        {this.state.isOpenMenu ? <BackDroup onClick={this.menuToggle} /> : null}
      </div>
    );
  }
}

export default LayoutUser;
