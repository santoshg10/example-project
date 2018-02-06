import React,{ Component}from 'react';
import Hello from '../Hello';
class App extends Component {
  render(){
    return (
      <div> 
      <Hello name="santosh" />
        <h2>Edit Done Show some magic {'\u2728'}</h2>
      </div>
    );
  }
}

export default App;