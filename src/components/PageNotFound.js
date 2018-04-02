import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';

class PageNotFound extends Component {
  render() {
    return (
      <div>
        <br/><br/><br/><br/><br/><br/><br/>
        <t1>Page Not Found!</t1><br/><br/><br/>
        <t1>Something went worng!</t1>
      </div>
    )
  }
}

export default withRouter(PageNotFound);
