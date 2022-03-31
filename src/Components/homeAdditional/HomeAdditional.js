import { add_info } from './data';
import Content from '../../Localization/Content';
import { useSelector } from 'react-redux';

const HomeAdditional = () => {
	const {
		count: { lang },
	} = useSelector((state) => state);

	const { add__info: ha } = Content[lang];
	return (
		<>
			<section className="home__additional">
				<div className="container">
					<ul className="additional__list">
						<li className="additional__item">
							<div className="addition__item__info">
								<span className="count">{add_info[0]}</span>
								<span className="discription">{ha.landslides}</span>
							</div>
						</li>
						<li className="additional__item">
							<div className="addition__item__info">
								<span className="count">{add_info[1]}</span>
								<span className="discription">{ha.funnels}</span>
							</div>
						</li>
						<li className="additional__item">
							<div className="addition__item__info">
								<span className="count">{add_info[2]}</span>
								<span className="discription">{ha.collapses}</span>
							</div>
						</li>
						<li className="additional__item">
							<div className="addition__item__info">
								<span className="count">{add_info[1]}</span>
								<span className="discription">{ha.avalanche}</span>
							</div>
						</li>
					</ul>
				</div>
			</section>
		</>
	);
};

export default HomeAdditional;
