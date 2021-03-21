import React from 'react';
import './App.css';

import Select from './components/SelectComponent';




class App extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
        names: [
          {
            id: 1,
            name: 'Jane'
          },
          {
            id: 2,
            name: 'JaneDva'
          },
          {
            id: 3,
            name: 'JaneTri'
          }
        ]
      }


  }


  render() {
      return (
          <div>
             <Select names={this.state.names} />
          </div>
      );
  }

}




export default App;