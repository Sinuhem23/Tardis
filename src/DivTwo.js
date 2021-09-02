import React, { Component } from 'react';
import DivThree from './DivThree';

// have it render a div
// move the h3 to inside the div in this component
// work on passing the data from DivOne down
// work on getting the click function to work properly

/* Create another DivThree inside DivTwo. how should it render?
will the function affect one or both divThrees?
should it affect one or both? */

export class DivTwo extends Component {
  render() {
    return (
      <div>
        <DivThree sibling2={this.props.sibling1} />

        <DivThree sibling2={this.props.sibling1} />
      </div>
    );
  }
}

export default DivTwo;
