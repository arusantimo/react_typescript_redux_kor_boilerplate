import * as React from 'react';

const style = require('./style.scss');

class Home extends React.Component<any, any> {
  public render(): JSX.Element {
    return (
      <div className={style.Home}>
        {/*<img src={require('./barbar.png')} />*/}
        <p>메인 페이지 입니다.</p>
      </div>
    );
  }
}

export { Home }
