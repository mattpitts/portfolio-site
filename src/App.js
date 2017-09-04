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
import Divider from './Components/Divider';
import Background from './Components/Background';
import createBackground from './three-background';

class App extends Component {
	constructor(props) {
		super(props);
		createBackground();
	}
  render() {
    return (
      <div className="App">
		<Background/>
			<div>
				<Divider/>
				<Header/>
				<Main/>
				<Divider/>
				<About/>
				<Divider/>
				<Projects/>
				<Divider/>
				<Contact/>
				<Divider/>
				<Resume/>
				<Divider/>
			</div>
      </div>
    );
  }
}

export default App;
