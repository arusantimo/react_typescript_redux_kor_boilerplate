import * as React from 'react';
import { getStars } from 'modules/stars';
import { IStars, IStarsAction } from 'models/stars';

const { connect } = require('react-redux');
const { asyncConnect } = require('redux-connect');
const style = require('./style.scss');

interface IProps {
  stars: IStars;
  getStars: Redux.ActionCreator<IStarsAction>;
}

@connect(
  (state) => ({ stars: state.stars }),  // mapStateToProps
)
@asyncConnect([{
  promise: ({ store: { dispatch } }) => {
    return dispatch(getStars());  // mapDispatchToProps
  },
}])

class Stars extends React.Component<IProps, {}> {
  public render(): JSX.Element {
    return (
      <div className={style.Stars}>
        react_typescript_redux_kor_boilerplate Repo의
        Star갯수는 {this.props.stars.isFetching ? 'Fetching Stars' : this.props.stars.count}
      </div>
    );
  }
}

export { Stars }
