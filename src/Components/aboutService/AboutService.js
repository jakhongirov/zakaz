import Image from 'next/image';
import Content from '../../Localization/Content';
import { useSelector } from 'react-redux';

import aboutService from '../../Assets/images/about-service.jpg';

const AboutService = () => {
	const {
		count: { lang },
	} = useSelector((state) => state);

	const { home_about: hb } = Content[lang];
	
	return (
		<>
			<section className="about__service">
				<div className="container">
					<h2 className="about__service__heading">{hb.about}</h2>
					<div className="about__service__info">
						<Image
							className="about__service__img"
							src={aboutService}
							alt="About the Service"
							width={762}
							height={683}
						/>
						<div className="about__service__tasks">
							<h3 className="tasks__title">
								{hb.heading}
							</h3>
							<ul className="tasks__list">
								<li className="tasks__item">
									{hb.tasks.one}
								</li>
								<li className="tasks__item">
									{hb.tasks.two}
								</li>
								<li className="tasks__item">
									{hb.tasks.three}
								</li>
								<li className="tasks__item">
									{hb.tasks.four}
								</li>
								<li className="tasks__item">
									{hb.tasks.five}
								</li>
								<li className="tasks__item">
									{hb.tasks.six}
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default AboutService;
