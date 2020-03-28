import * as React from "react";
import {style} from './menu-list.style';
import UserSvg from '../../../utils/svg/userSvg';
import ProcessesSvg from '../../../utils/svg/processesSvg';
import {Link} from 'react-router-dom';

interface IMenuListProps {
  isOpen: boolean;
  onClick: (e: React.MouseEvent) => void;
}

const MenuList: React.FC<IMenuListProps> = ({ isOpen, onClick }) => {
 
  return(
    <div className={isOpen ? style.menuStyle : style.menuStyle + ' ' + style.menuClose}>
        <Link to='/layout/user-page' onClick={onClick}>
          <div 
            className={style.field}
            style={{
              marginTop: '60px'
            }}
          >
            <UserSvg/>
            <p className={style.span}>
              Username
            </p>
          </div>

        </Link>
        <Link to='/layout/process-list' onClick={onClick}>
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
