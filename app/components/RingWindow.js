import React, { Component } from 'react';
import { Stage, Layer, Arc } from 'react-konva';

import CircleImage from './CircleImage';
import ArcButton from './ArcButton';

class RingWindow extends Component {
  render() {
    const { width, height, imgUrl } = this.props;
    const center = width / 2 + 10;
    return (
      <Stage width={width + 20} height={height + 20}>
        <Layer>
          <CircleImage
            height={height}
            width={width}
            img="http://konvajs.github.io/assets/yoda.jpg"
            center={center}
          />
          <ArcButton center={center} angle={60} />
          <ArcButton center={center} angle={60} rotationDeg={60} />
        </Layer>
      </Stage>
    );
  }
}

export default RingWindow;
