import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,  Route, HashRouter, Switch, Link } from 'react-router-dom';
import App1 from './src/App1';
import App from './src/App';
import second from './src/second';
import Hello from './src/helloWorld';

class HelloWorld extends Component {
  render() {
    return (
      <div>
      	<h3>测试</h3>
      	<div className="link">
      		<ul>
      			<li><Link to="/home">Home</Link></li>
      			<li><Link to="/js/app">App</Link></li>
      			<li>
      				<ul>
      					<Link to="/html/home">Home</Link>
      					<Link to="/html/app">App</Link>
      					<Link to="/html/app1">App1</Link>
      				</ul>
      			</li>
      		</ul>
      	</div>
      	<div>
      		<Switch>
      			<Route exact path="/home" component={Hello}></Route>
      			<Route path="/js/app" component={App}></Route>
      			{/*<Route path="/html/app1" component={App1}></Route>*/}
      			<Switch>
	      			<Route exact path="/html/home" component={Hello}></Route>
	      			<Route path="/html/app" component={App}></Route>
	      			<Route path="/html/app1" component={App1}></Route>
      			</Switch>
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
