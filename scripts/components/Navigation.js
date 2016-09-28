import {default as React,Component} from 'react';

import {Link} from 'react-router';

export default class Navigation extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li><Link to='/'>Show description of Country</Link></li>
          <li><Link to='map'>Show map of Country</Link></li>
        </ul>
      </nav>
    );
  }
}
