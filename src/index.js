import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';

import Header from './components/header'
import Intro from './components/intro'
import Features from './components/features'
import DreamCards from './components/dreamcards'
import Testimonials from './components/testimonials'
import Footer from './components/footer'

function App() {
	return (
		<React.Fragment>
			<Header title="Dream Tracer"/>
			<Intro />
			<Features />
			<DreamCards />
			<Testimonials />
			<Footer />
		</React.Fragment>
	);
}

ReactDOM.render(
    <App />,
 	document.getElementById('root')
	);
