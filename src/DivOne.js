import React, { Component } from 'react';
import DivTwo from './DivTwo';

/* have it render a div
move the h3 to inside the div in this component
work on passing the data from state down
work on getting the click function work properly */

export class DivOne extends Component {
  render() {
    return (
      <div>
        <DivTwo sibling1={this.props.dataFromParent} />
      </div>
    );
  }
}

export default DivOne;
