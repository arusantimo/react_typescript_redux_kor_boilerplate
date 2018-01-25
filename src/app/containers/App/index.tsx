import * as React from 'react';
import * as Helmet from 'react-helmet';
import { Header } from 'components';

const appConfig = require('../../../../config/main');
const style = require('./style.scss');

export class App extends React.Component<void, void> {
  public render(): JSX.Element {
    return (
      <section className={style.AppContainer}>
        <Helmet {...appConfig.app} {...appConfig.app.head}/>
        <Header/>
        {this.props.children}
      </section>
    );
  }
}
