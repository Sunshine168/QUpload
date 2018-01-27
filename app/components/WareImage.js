import React from 'react';
import styled, { keyframes } from 'styled-components';

import './WareImage.css';

const w = keyframes`
  0%{
    width:10px;
    height:10px;
    /* top: calc((%)/2);
    left: calc((50%)/2); */
  }
  99% {
      opacity: 1;
    }
  100%{
    /* top: calc((50%px)/2);
    left: calc((50%px)/2); */
    width:100px;
    height:100px;
  }
`;

const Ware = styled.div`
  animation: ${w} 1s ${props => (props.time ? props.time : '')}s;
  position: absolute;
  width: 100px;
  height: 100px;
  border-radius: 300px;
  background-attachment: fixed;
  background-position: center center;
  background: url(${require('../asset/KjyvQ6I.jpg')});
  background-size: cover;
  z-index: ${props => props.zIndex};
`;

const TestContainer = styled.div`
  /* background-color: #000; */
  height: 100px;
  width: 100px;
  border-radius: 50%;
  position: relative;
  margin: 0 auto;
`;

const TestImage = styled.div`
  position: absolute;
  background: url(${require('../asset/KjyvQ6I.jpg')});
  background-size: cover;
  height: 100px;
  width: 100px;
  border-radius: 50%;
  float: left;
`;

const WareWrapper = styled.div`
  height: 100px;
  width: 100px;
  position: absolute;
  top: 0;
`;

const wareConfig = [
  { bgSize: 106, key: 1 },
  { bgSize: 102, time: 0.15, key: 2 },
  { bgSize: 104, time: 0.45, key: 3 },
  { bgSize: 100, time: 0.75, key: 6 }
];

class WareImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFocused: false
    };
  }
  showWare = () => {
    if (this.state.isFocused) {
      return;
    }
    this.setState({
      isFocused: true
    });
    setTimeout(() => {
      this.setState({
        isFocused: false
      });
    }, 3000);
  };
  render() {
    return (
      <TestContainer onMouseEnter={this.showWare}>
        <TestImage />
        {this.state.isFocused ? (
          <WareWrapper>
            {wareConfig.map((ware, index) => (
              <Ware zIndex={index + 2} bgSize={ware.bgSize} time={ware.time} key={ware.key} />
            ))}
          </WareWrapper>
        ) : null}
      </TestContainer>
    );
  }
}

export default WareImage;
