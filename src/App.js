import React,{ Component } from 'react';
import './assets/css/App.css';

import Home from './components/Home'
import List from './components/List'
import Form from './components/Form'
import Fater from './components/Fater'

class App extends Component {
  render() {
    return (
      <div>
        你好
        {/* <Home/> */}
        {/* <List/> */}
        {/* <Form/> */}
        <Fater/>
      </div>
    )
  }
}

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

export default App;
