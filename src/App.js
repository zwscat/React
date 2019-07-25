import React,{ Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './assets/css/App.css';

import Home from './components/Home'
import List from './components/List'
import Form from './components/Form'
// import Fater from './components/Fater'
// import Router from './components/Router'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          {/* <Home/> */}
          {/* <Form/> */}
          {/* <Fater/> */}
          {/* <Router/> */}
          <ul>
            <li><Link to='/'>首页</Link></li>
            <li><Link to='/form'>表单</Link></li>
          </ul>
          <br/>
          <hr/>
          <Route exact path='/' component={Home} />
          <Route exact path='/form' component={Form} />
          <Route exact path='/list/:id' component={List} />
        </div>
      </Router>
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
