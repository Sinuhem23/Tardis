import './App.css';
import React, { Component } from 'react';

export class App extends Component {
  state = {
    tardis: {
      name: 'Time and Relative Dimension in Space',
      caps: false,
    },
  };
  changeIt = (text) => {
    if (this.state.tardis.caps) {
      this.setState({
        tardis: {
          name: text.toLowerCase(),
          caps: false,
        },
      });
    } else {
      this.setState({
        tardis: {
          name: text.toUpperCase(),
          caps: true,
        },
      });
    }
  };
  render() {
    return (
      <div className='App'>
        {/* render a div inside the div, put an h3 that will render the name property from this.state. Set an initial state with the T.A.R.D.I.S object (or just it's properties)T.A.R.D.I.S. properties inside this.state object: */}

        <div>
          <h3>{this.state.tardis.name}</h3>
          <button
            onClick={() =>
              this.changeIt('Time and Relative Dimension in Space')
            }
          ></button>
        </div>
        {/* <div>
          <h3>{this.state.tardis.name}</h3>
          <button onClick={() => this.changeIt()}></button>
        </div> */}
      </div>
    );
  }
}

export default App;
