import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/index.css';
import { testimonials } from '../data/testimonials'

const Testimonials = () => {
	return (
		<div>
			<div className="content-container">
			<h3>What are users saying?</h3>
				<section className="testimonials">
					{testimonials.map((reviewItem) => {
						const { name, review } = reviewItem;
						return (
							<article className="review">
								<h3>{name}</h3>
								<span id="quote">&ldquo;</span>
								<p>{review}</p>
								<span id="quote-end">&rdquo;</span>
							</article>
						)
					})}
				</section>
			</div>
		</div>
	);
}

export default Testimonials