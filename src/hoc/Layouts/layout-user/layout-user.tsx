import * as React from "react";
import MenuList from "../../../components/Navigation/MenuList/MenuList";
import BackDroup from "../../../components/BackDrop/BackDrop";
import {style} from './layout-user.style';
import { ILayoutProps, ILayoutState } from "./layout-user.types";

class LayoutUser extends React.Component<ILayoutProps, ILayoutState> {
  constructor(props: ILayoutProps) {
    super(props);

    this.state = {
      isOpenMenu: false
    };

    this.menuToggle = this.menuToggle.bind(this);
  }

  public menuToggle() {
    this.setState({
      isOpenMenu: !this.state.isOpenMenu
    });
    
  }

  private showHeader = () => {
    if(this.state.isOpenMenu) {
      return null
    }
    
    return (
      <div className={style.layoutHeaderContent}>
        <img
          src= "/icon/menu.png"
          onClick={this.menuToggle}
          className={style.menuToggle}
          alt=''
       />
        <h2 className={style.h2}>Меню</h2>
      </div>
    )
  }

  render() {
    return (
      <div className={style.layout}>
        <header className={style.layoutHeader}>
          {this.showHeader()}
        </header>
        <MenuList isOpen={this.state.isOpenMenu} onClick={this.menuToggle}/>
        <main className={style.main}>
          {this.props.children}
        </main>
        {this.state.isOpenMenu ? <BackDroup onClick={this.menuToggle} /> : null}
      </div>
    );
  }
}

export default LayoutUser;
