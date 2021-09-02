import './App.css';
import DivOne from './DivOne';

import React, { Component } from 'react';

// function App() {
//   return (
//     <div>
//       <DivOne />
//     </div>
//   );
// }

export class App extends Component {
  state = {
    name: 'Time and Relative Dimension in Space',
  };

  render() {
    return (
      <div className='App'>
        {/* render a div inside the div, put an h3 that will render the name property from this.state. Set an initial state with the T.A.R.D.I.S object (or just it's properties)T.A.R.D.I.S. properties inside this.state object: */}

        <DivOne dataFromParent={this.state} change={this.changeIt} />
      </div>
    );
  }
}

export default App;
