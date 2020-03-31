import * as React from "react";
import {style} from './menu-list.style';
import UserSvg from '../../../utils/svg/userSvg';
import ProcessesSvg from '../../../utils/svg/processesSvg';
import {Link} from 'react-router-dom';
import { IMenuListProps } from "./menu-list.types";
import LogoSvg from '../../../utils/svg/logoSvg';

const MenuList: React.FC<IMenuListProps> = ({ isOpen, onClick }) => {
 
  return(
    <div className={isOpen ? style.menuStyle : style.menuStyle + ' ' + style.menuClose}>
      <header className={style.header}>
        <img
          src="/icon/menu-open.png"
          alt=''
          onClick={onClick}
          className={style.menuToggle}
        />
        <LogoSvg />
      </header>
      <Link to='/user-page'>
        <div 
          className={style.field}
        >
        <UserSvg/>
          <p className={style.span}>
            Username
          </p>
        </div>

      </Link>
      <Link to='/process-list'>
        <div className={style.field}>
          <ProcessesSvg/>
          <p className={style.span}>
            Список процессов
          </p>
        </div>
      </Link>
    </div>
  )
};

export default MenuList;
