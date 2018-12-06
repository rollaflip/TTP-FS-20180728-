import React, { Component } from 'react';
import './nav.css';

class Navigation extends Component {
  render() {
    return (
     <nav>
<h2 className="logo">Stock Portfolio</h2>
<ul>
  <li><a href='#'>Portfolio</a></li>
  <li><a href='#'>Transactions</a></li>
  <li><a href='#'>Login</a></li>
</ul>
     </nav>




    )
  }
}

export default Navigation;
