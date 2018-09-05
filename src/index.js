import React from 'react';
import ReactDOM, { hydrate } from 'react-dom';

import App from './components/App';


// axios.get('/api/contests')
//   .then(resp => {
    ReactDOM.hydrate(
      <App initialContests={window.initialData.contests}/>,
      document.getElementById('root')
    )
    // this.setState({
    //   contests: resp.data.contests
    // })
  // })
  // .catch(console.error)



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
