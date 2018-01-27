import React, { Component } from 'react';
import { Arc, Group, Text } from 'react-konva';
import PropTypes from 'prop-types';

class ArcButton extends Component {
  static propTypes = {
    center: PropTypes.number.isRequired,
    angle: PropTypes.number.isRequired,
    onClick: PropTypes.func,
    rotationDeg: PropTypes.number
  };
  static defaultProps = {
    rotationDeg: 0
  };
  constructor(props) {
    super(props);
    this.state = {
      isFocused: false
    };
  }
  render() {
    const { center, angle, rotationDeg } = this.props;
    return (
      <Group>
        <Arc
          rotation={rotationDeg}
          clockwise={false}
          x={center}
          y={center}
          innerRadius={55}
          outerRadius={!this.state.isFocused ? 75 : 82}
          angle={angle}
          fill="yellow"
          stroke="black"
          strokeWidth={4}
          onMouseEnter={() => {
            if (!this.state.isFocused) {
              this.setState({
                isFocused: true
              });
            }
          }}
          onMouseLeave={() => {
            if (this.state.isFocused) {
              this.setState({
                isFocused: false
              });
            }
          }}
        />
      </Group>
    );
  }
}

export default ArcButton;
