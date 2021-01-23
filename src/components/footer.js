import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/index.css';
import footerStyle from '../styles/footer.module.scss'

import logomark from '../img/logomark_small.png';
import { FaFacebookSquare } from "react-icons/fa"
import { RiInstagramFill } from "react-icons/ri"
import { FaLinkedin } from 'react-icons/fa'
import { FaPinterestSquare } from 'react-icons/fa'

const Footer = () => {
	return (
		<div className={footerStyle.container}>
			<section className="content-container">
				<article className={footerStyle.one}>
					<img src={logomark} alt="Dream Tracer Logo" />
				</article>
				<article className={footerStyle.two}>
					<p className={footerStyle.text}>
					Copyright 2020, Dream Tracer
					<br/>All Content Created By Nick Robinson</p>
				</article>
				<article className={footerStyle.three}>
					<button className="download">Download Now</button>
				</article>
				<article className={footerStyle.four}>
					<FaFacebookSquare className={footerStyle.social}/>
					<RiInstagramFill className={footerStyle.social}/>
					<FaPinterestSquare className={footerStyle.social}/>
					<FaLinkedin className={footerStyle.social}/>
				</article>
			</section>
		</div>
	);
}

export default Footer