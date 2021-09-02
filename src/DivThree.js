import React, { Component } from 'react';

// have it render a div
// move the h3 to inside the div in this component
// work on passing the data from DivTwo down
// work on getting the click function to work properly

export class DivThree extends Component {
  render() {
    return (
      <div>
        <h3
          onClick={() =>
            this.props.changeIt('Time and Relative Dimension in Space')
          }
        >
          {this.props.sibling2.name}
        </h3>
      </div>
    );
  }
}

export default DivThree;
