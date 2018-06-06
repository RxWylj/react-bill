import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,  Route, HashRouter, Switch, Link } from 'react-router-dom';
import Bill from './component/bill';

class HelloWorld extends Component {
  render() {
    return (
      <div>
      	<h3>测试</h3>
      	<div className="link">
      		<ul>
      			<li><Link to="/">bill</Link></li>
      		</ul>
      	</div>
      	<div>
      		<Switch>
      			<Route exact path="/" component={Bill}></Route>
      		</Switch>
      	</div>
      </div>
    );
  }
}

ReactDOM.render(
	(<BrowserRouter><HelloWorld></HelloWorld></BrowserRouter>),
  document.getElementById('root')
)
