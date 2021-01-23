import React from 'react';
import ReactDOM from 'react-dom';
import { features } from '../data/features'
import '../styles/index.css';
import featuresStyle from '../styles/features.module.scss'

const Features = () => {
	return (
		<div className={featuresStyle.bg}>
			<div className={featuresStyle.content}>
				
					{features.map((featureItem) => {
						const { icon, featureName, feature, mock } = featureItem;
						return (
							<section className={featuresStyle.container}>
								<article className={featuresStyle.left}>
									<img src={mock} alt="iPhone Screenshot" className={featuresStyle.phoneMock}/>
								</article>
								<article className={featuresStyle.right}>
									<img src={icon} alt={featureName} className={featuresStyle.icon}/>
									<h2 className={featuresStyle.feature}>{featureName}</h2>
									<p>{feature}</p>
								</article>
							</section>
						)
					})}
				
			</div>
		</div>
	);
}

export default Features