import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/index.css';
import phone from '../img/iphone1.gif'

const Intro = () => {
	return (
		<div>
			<section className="content-container">
				<article className="left">
					<h1>Dream Tracer is a creative dream journal mobile app for iOS.</h1>
					<h3>Why should we remember our dreams?</h3>
					<p>
						Dreams can be strange, inspiring, scary and uplifting. Our dreams
						can hold powerful insights about the subconscious through an illustration
						of deep metaphors. Analyzing our dreams can increase self-awareness and
						self-healing in ways that we might overlook in our everyday waking states.
					</p>
					<button className="download">Download Now</button>
				</article>
				<article className="right">
					<img src={phone} alt="Dream Tracer Home Screen" className="phone-mock"/>
				</article>
			</section>
			<section className="quote">
				<span id="quote2">&ldquo;</span>
				<h1>The mind is like an iceberg, it floats with one-seventh of its bulk above water.</h1>
				<span id="quote-end2">&rdquo;</span>
				<h3>- Sigmund Freud</h3>
			</section>
		</div>
	);
}

export default Intro