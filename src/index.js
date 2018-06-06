import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect, IndexRoute, hashHistory, Link } from 'react-router-dom';
import App1 from './App1';
import App from './App';
import second from './second';

class HelloWorld extends Component {
  render() {
    return (
      <div>
      	<h1>测试</h1>
      	<ul>
      		<li><Link to="/">Home</Link></li>
      		<li><Link to="/App1">About</Link></li>
      		<li><Link to="/App">App</Link></li>
      	</ul>
      </div>
    );
  }
}

const App11 = () => {
	<div>
		<h3>App</h3>
	</div>
}

const App12 = () => {
	<div>
		<h3>App1</h3>
	</div>
}

ReactDOM.render(
	(<HelloWorld>
		<Route exact path="/">{Home}</Route>
		<Route path="/App1">{App11}</Route>
		<Route path="/App">{App12}</Route>
	</HelloWorld>)
)
