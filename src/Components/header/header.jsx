import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState, useEffect } from 'react';
import Content from '../../Localization/Content';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';


import Logo from '../../Assets/images/logo.svg';
import Flag from '../../Assets/images/flag.svg';
import Arrow from '../../Assets/images/row.svg';

const Header = () => {
	const router = useRouter();

	const langValue = useRef();

	const dispatch = useDispatch();

	const {
		count: { lang },
	} = useSelector((state) => state);

	function getLang() {
		dispatch({ type: window.localStorage.getItem('lang') || 'ru' });
	}

	langValue.current = getLang;

	useEffect(() => {
		langValue.current();
	}, []);

	const { header: h } = Content[lang];

	return (
		<>
			<div className="container">
				<div className="header__top">
					<div className="phone">
						<a
							className="phone__number number_one"
							href="tel:+998712415470"
						>
							+99871 241-54-70
						</a>
						<a className="phone__number" href="tel:+998712415470">
							+99871 241-54-70
						</a>
					</div>
					<div className="email__address">
						<a
							href="mailto:info@gosslujba.uz"
							className="email"
						>
							info@gosslujba.uz
						</a>
					</div>
					<div className="work__time">
						<time className="time__info">
							Пн: пт 8:00 - 19:00
						</time>
					</div>
					<div className="for__blinders">
						<span className="text">
							{h.for_blinders}
						</span>
					</div>
					<form className="search">
						<input
							className="search__input"
							type="text"
							placeholder={h.search}
						/>
					</form>
					<div className="lang__box">
						<ul className="lang__list">
							<li
								className={lang === 'uz' ? 'lang__item lang__item--active' : 'lang__item'}
								onClick={() => {
									dispatch({ type: 'uz' })
								}}
							>
								O'zbekcha
								<span className="under_line"></span>
							</li>
							<li
								className={lang == 'ru' ? 'lang__item lang__item--active' : 'lang__item'}
								onClick={() => {
									dispatch({ type: 'ru' })
								}}
							>
								Русский
								<span className="under_line"></span>
							</li>
							<li
								className={lang == 'en' ? 'lang__item lang__item--active' : 'lang__item'}
								onClick={() => {
									dispatch({ type: 'en' })
								}}
							>
								English
								<span className="under_line"></span>
							</li>
						</ul>
					</div>
				</div>
				<div className="header__bottom">
					<div className="header__info">
						<Link href="/">
							<a className="header__logo--link">
								<div className="logo__box">
									<Image
										className="logo"
										src={Logo}
										alt="Ministry logo"
										maxwidth={100}
										maxheight={76}
										objectFit="cover"
									/>
								</div>
							</a>
						</Link>
						<div className="flag__box">
							<Image
								className="flag"
								src={Flag}
								alt="flag"
								maxwidth={3}
								maxheight={76}
							/>
						</div>
						<p className="header__heading">
							{h.heading}
						</p>
					</div>

					<nav className="header__navbar">
						<ul className="navbar__list">
							<li className="navbar__item">
								<Link href="/">
									<a
										className={`navbar__item-link ${router.pathname == '/'
												? 'navbar__item-link--active'
												: ''
											}`}
									>
										{h.home}
									</a>
								</Link>
								<span className="navbar_line"></span>
							</li>
							<li className="navbar__item">
								<Link href="/">
									<a
										className={`navbar__item-link ${router.pathname == '/'
												? 'navbar__item-link--active'
												: ''
											}`}
									>
										{h.about}
									</a>
								</Link>
								<div className="item__row">
									<Image
										src={Arrow}
										alt="Down arrow"
										aria-hidden="true"
										width="13"
										height="8"
									/>
								</div>
								<ul className="navbar-item__dropdown">
									<li className="dropdown__item">
										<Link href="/">
											<a className="navbar__dropdown-link">
												{h.sub_list_one.legal_status}
											</a>
										</Link>
									</li>
									<li className="dropdown__item">
										<Link href="/">
											<a className="navbar__dropdown-link">
												{h.sub_list_one.charter}
											</a>
										</Link>
									</li>
									<li className="dropdown__item">
										<Link href="/">
											<a className="navbar__dropdown-link">
												{h.sub_list_one.structure}
											</a>
										</Link>
									</li>
									<li className="dropdown__item">
										<Link href="/">
											<a className="navbar__dropdown-link">
												{h.sub_list_one.management}
											</a>
										</Link>
									</li>
									<li className="dropdown__item">
										<Link href="/">
											<a className="navbar__dropdown-link">
												{h.sub_list_one.open_data}
											</a>
										</Link>
									</li>
									<li className="dropdown__item">
										<Link href="/">
											<a className="navbar__dropdown-link">
												{h.sub_list_one.department}
											</a>
										</Link>
									</li>
								</ul>
								<span className="navbar_line"></span>
							</li>
							<li className="navbar__item">
								<Link href="/">
									<a
										className={`navbar__item-link ${router.pathname == '/'
												? 'navbar__item-link--active'
												: ''
											}`}
									>
										{h.news}
									</a>
								</Link>
								<span className="navbar_line"></span>
							</li>
							<li className="navbar__item">
								<Link href="/">
									<a
										className={`navbar__item-link ${router.pathname == '/'
												? 'navbar__item-link--active'
												: ''
											}`}
									>
										{h.active}
									</a>
								</Link>
								<div className="item__row">
									<Image
										src={Arrow}
										alt="Down arrow"
										aria-hidden="true"
										width="13"
										height="8"
									/>
								</div>
								<span className="navbar_line"></span>
							</li>
							<li className="navbar__item">
								<Link href="/">
									<a
										className={`navbar__item-link ${router.pathname == '/'
												? 'navbar__item-link--active'
												: ''
											}`}
									>
										{h.service}
									</a>
								</Link>
								<span className="navbar_line"></span>
							</li>
							<li className="navbar__item">
								<Link href="/">
									<a
										className={`navbar__item-link ${router.pathname == '/'
												? 'navbar__item-link--active'
												: ''
											}`}
									>
										{h.contact}
									</a>
								</Link>
								<span className="navbar_line"></span>
							</li>
						</ul>
					</nav>
					<div className="header__social">
						<ul className="social__list">
							<li className="social__item">
								<a
									className="social__link"
									href="https://www.facebook.com/"
								></a>
							</li>
							<li className="social__item">
								<a
									className="social__link"
									href="https://www.instagram.com/"
								></a>
							</li>
							<li className="social__item">
								<a
									className="social__link"
									href="https://web.telegram.org/"
								></a>
							</li>
						</ul>
					</div>
				</div>
			</div>

		</>
	);
};

export default Header;
