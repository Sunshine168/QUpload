// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.css';
import WareImage from './WareImage';
import CircleImage from './CircleImage';
import RingWindow from './RingWindow';

type Props = {};

export default class Home extends Component<Props> {
  props: Props;

  render() {
    return (
      <div className={styles.floating_container} data-tid="container">
        {/* <WareImage /> */}
        <RingWindow width={150} height={150} />
      </div>
    );
  }
}
