import React from 'react';
import ReactDOM, { hydrate } from 'react-dom';


import App from './components/App';

ReactDOM.hydrate(
  <App initialContests={[]}/>,
  document.getElementById('root')
)


// class App extends React.Component {
//   constructor(props) {
//     super(props)
//   }
//   render() {
//     return (
//       <h2 className="text-center">
//         {this.props.headerMessage}
//       </h2>
//     )
//   }
// }
//
//
