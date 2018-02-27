import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';

class PageNotFound extends Component {
  render() {
    return (
      <div>
        Page Not Found!
      </div>
    )
  }
}

export default withRouter(PageNotFound);
