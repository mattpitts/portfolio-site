import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

import Main from './Components/Main';
import Header from './Components/Header';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Resume from './Components/Resume';
import Footer from './Components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">

		<BrowserRouter>
			<div>
				<Header/>
				<div className='main'>
					<Route exact path="/" component={Main}></Route>
					<Route path="/about" component={About}></Route>
					<Route path="/projects" component={Projects}></Route>
					<Route path="/contact" component={Contact}></Route>
					<Route path="/resume" component={Resume}></Route>
				</div>
			</div>
		</BrowserRouter>
      </div>
    );
  }
}

export default App;
