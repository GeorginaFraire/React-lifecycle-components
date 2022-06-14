
import './App.css';
import React from 'react';

import FilteredList from './components/FilteredList';
import TextInput from './components/TextInput';
import { USERS } from './mocks/Directory';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
/* Converting the function-componente above into a class */
export default class App extends React.Component {
constructor(props){
  super(props);
  this.state = {
    list: USERS, 
    value: ''
  };
  this.onChange = this.onChange.bind(this);
}

onChange(value){
  this.setState({value});
}

  render() {
    const { value, list} = this.state;
    
    return <div className="App">
        <TextInput onChange={this.onChange} value={value}></TextInput>
        <FilteredList list={list} filterValue={value}></FilteredList>
    </div>;
  }
  
}