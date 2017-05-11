import * as React from 'react';
import { Link } from 'react-router';

const style = require('./style.scss');

interface IAppProps {
  addStyle?: any;
};

export class Header extends React.Component<IAppProps, any> {
  public render(): JSX.Element {
    return (
      <nav className={style.Nav}>
        <ul>
          <li><Link to="/">메인</Link></li>
          <li><Link to="counter">서브1(리덕스 기본)</Link></li>
          <li><Link to="stars">서브2(fetch 리덕스)</Link></li>
        </ul>
      </nav>
    );
  }
}
