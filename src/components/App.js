import React from 'react';
// import axios from 'axios';
import ContestList from './ContestList';
import Header from './Header';
import Contest from './Contest';
import * as api from '../api';

const pushState = (obj, url) => window.history.pushState(obj, "", url)


class App extends React.Component {
  state = {
    pageHeader: 'Naming Contest',
    contests: this.props.initialContests
  }

  componentDidMount() {
    // axios.get('/api/contests')
    //   .then(resp => {
    //     this.setState({
    //       contests: resp.data.contests
    //     })
    //   })
    //   .catch(console.error)

  }
  fetchContest = (contestId) => {
    pushState(
      { currentContestId: contestId },
      `/contest/${contestId}`
    );
    api.fetchContest(contestId).then(contest => {
      this.setState({
        pageHeader: contest.contestName,
        currentContestId: contest.id,
        contests: {
          ...this.state.contests,
          [contest.id]: contest
        }
      });
    });
  };

  currentContent() {
    if (this.state.currentContestId) {
      return <Contest {...this.state.contests[this.state.currentContestId]} />
    }
      return <ContestList
        onContestClick={this.fetchContest}
        contests={this.state.contests} />
  }

  render() {
    return (
      <div>
        <Header message={this.state.pageHeader} />
      {this.currentContent()}
      </div>
    )
  }
}

export default App;
