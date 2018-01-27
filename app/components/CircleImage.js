import React, { Component } from 'react';
import { Shape } from 'react-konva';
import PropTypes from 'prop-types';

class CircleImage extends Component {
  static propTypes = {
    img: PropTypes.string,
    center: PropTypes.number
  };
  constructor(props) {
    super(props);
    this.state = {
      image: null
    };
  }
  componentDidMount() {
    const image = new window.Image();
    const { img } = this.props;
    image.src = img;
    image.onload = () => {
      // setState will redraw layer
      // because "image" property is changed
      this.setState({
        image
      });
    };
  }
  render() {
    const { center } = this.props;
    return (
      <Shape
        sceneFunc={context => {
          if (!this.state.image) {
            return;
          }
          context.beginPath();
          // void ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);
          context.arc(center, center, 55, 0, Math.PI * 2, true);
          context.closePath();
          context.clip();
          // void ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
          context.drawImage(this.state.image, center / 2 - 10, center / 2 - 15, 120, 120);
          context.beginPath();
          context.clip();
          context.closePath();
          context.restore();
        }}
      />
    );
  }
}

export default CircleImage;
