import React from 'react';
import PropTypes from 'prop-types';


class Contest extends React.Component {
  render() {
    return(
      <div>
        {this.props.id}
      </div>
    )
  }
}

Contest.propTypes = {
  id: PropTypes.number.isRequired
}

export default Contest;
