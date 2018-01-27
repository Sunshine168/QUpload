// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

import styles from './Counter.css';

type Props = {
  increase: () => void,
  decrease: () => void,
  count: number
};

@inject(stores => ({
  count: stores.counter.count,
  increase: stores.counter.increase,
  decrease: stores.counter.decrease,
}))
@observer
class Counter extends Component<Props> {
  props: Props;

  render() {
    const { increase, decrease, count } = this.props;
    console.log(this.props);
    return (
      <div>
        <div className={styles.backButton} data-tid="backButton">
          <Link to="/">
            <i className="fa fa-arrow-left fa-3x" />
          </Link>
        </div>
        <div className={`counter ${styles.counter}`} data-tid="counter">
          {count}
        </div>
        <div className={styles.btnGroup}>
          <button className={styles.btn} onClick={increase} data-tclass="btn">
            <i className="fa fa-plus" />
          </button>
          <button className={styles.btn} onClick={decrease} data-tclass="btn">
            <i className="fa fa-minus" />
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
