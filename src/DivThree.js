import React, { Component } from 'react';

// have it render a div
// move the h3 to inside the div in this component
// work on passing the data from DivTwo down
// work on getting the click function to work properly

export class DivThree extends Component {
  state = {
    caps: false,
  };
  changeIt = () => {
    console.log('Reached Here');
    if (this.state.caps) {
      this.setState({
        caps: false,
      });
    } else {
      this.setState({
        caps: true,
      });
    }
  };
  render() {
    return (
      <div>
        <h3 onClick={() => this.changeIt()}>
          {this.state.caps
            ? this.props.sibling2.name.toUpperCase()
            : this.props.sibling2.name.toLowerCase()}
        </h3>
      </div>
    );
  }
}

export default DivThree;
