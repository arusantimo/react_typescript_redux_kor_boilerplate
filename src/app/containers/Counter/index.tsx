import * as React from 'react';
import { increment, decrement } from 'modules/counter/';
import { ICounter } from 'models/counter';
import { ICounterAction } from 'models/counter';

const { connect } = require('react-redux');
const style = require('./style.scss');

interface IProps {
  counter: ICounter;
  increment: Redux.ActionCreator<ICounterAction>;
  decrement: Redux.ActionCreator<ICounterAction>;
}

@connect(
  (state) => ({ counter: state.counter }), // mapStateToProps
  (dispatch) => ({
    decrement: () => dispatch(decrement()), // mapDispatchToProps
    increment: () => dispatch(increment()),
  }),
)
class Counter extends React.Component<IProps, void> {
  public render(): JSX.Element {
    return (
      <div className={style.Counter}>
        <h4>Counter Example</h4>
        <button
          name="incBtn"
          onClick={this.props.increment}>
          INCREMENT
        </button>
        <button
          name="decBtn"
          onClick={this.props.decrement}
          disabled={this.props.counter.count <= 0}>
          DECREMENT
        </button>
        <p>{this.props.counter.count}</p>
      </div>
    );
  }
}

export { Counter }
