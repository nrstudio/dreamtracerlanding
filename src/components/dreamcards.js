import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/index.css';
import dreamcardStyle from '../styles/dreamcard.module.scss';
import card1 from '../img/07_TheCavern.png';
import card2 from '../img/17_ThePhoenix.png';


const DreamCards = () => {
	return (
		<div className={dreamcardStyle.bg}>
			<section className={dreamcardStyle.container}>
				<article className={dreamcardStyle.left}>
					<img src={card1} className={dreamcardStyle.card1} />
					<img src={card2} className={dreamcardStyle.card2} />
				</article>
				<article className={dreamcardStyle.right}>
					<h2>Dream Cards</h2>
					<p>When a user creates a new dream post, they earn a <b>Dream Card</b>
					. Sometimes you may get the same dream card for different dreams.
					Swipe on a Dream Card to see the related dreams on the back!
					Think of them as tarot cards, or abstract representations of your dreams.</p>
				</article>
			</section>
		</div>
	);
}

export default DreamCards