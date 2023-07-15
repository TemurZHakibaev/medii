import "./Header.scss";
import {
	logo,
	facebook,
	instagram,
	vk,
	youtube,
	yey,
	arrowDown,
} from "../../assets/images/index";

import { useState } from "react";
import HeaderSwiper from "../Swiper/HeaderSwiper";

const Header = () => {
	const [activeLi, setActiveLi] = useState(2);

	const clients = [
		{ id: 1, title: "Комплексные процедуры" },
		{ id: 2, title: "Центр обучения" },
		{ id: 3, title: "VIP клиентам" },
	];

	return (
		<header className="header">
			<nav className="header__nav container">
				<ul className="header__nav__list">
					<li></li>
					<li>
						<img src={logo} alt="logo" />
					</li>
					<li></li>
					<li className="header__nav__list__number">
						<a href="tel:+7 (123) 456 78 90">+7 (123) 456 78 90</a>
					</li>
					<li></li>
					<li className="header__nav__list__salon">
						<p>Наши салоны</p>
						<img src={arrowDown} alt="" />
					</li>
					<li></li>
					<li className="header__nav__list__yey">
						<img src={yey} alt="" />
						<p>Версия для слабовидящих</p>
					</li>
					<li></li>
					<li>
						<img src={vk} alt="" />
					</li>
					<li></li>
					<li>
						<img src={youtube} alt="" />
					</li>
					<li></li>
					<li>
						<img src={facebook} alt="" />
					</li>
					<li></li>
					<li>
						<img src={instagram} alt="" />
					</li>
					<li></li>
				</ul>
			</nav>
			<div className="header__main">
				<div className="header__main__inside container">
					<ul className="header__main__inside__list">
						<li>Косметология</li>
						<li>Пластическая хирургия</li>
						<li>Стоматология</li>
						<li>Лазерная медицина</li>
						<li>Контакты</li>
						<li>Запись на прием</li>
					</ul>
					{/* <div className="header__main__inside__cosmetology">
						<div className="header__main__inside__cosmetology__left">
							<div className="header__main__inside__cosmetology__left__text">
								<h1>Косметология</h1>
								<p>
									Современный мир диктует новые каноны жизни: ухоженное лицо и
									тело, стройная, подтянутая фигура — сегодня это неотъемлемые
									черты привлекательной внешности, характеризующие человека
									благополучного и успешного.
								</p>
								<button>подробнее</button>
							</div>
							<div className="header__main__inside__cosmetology__left__arrow navigate_buttons">
								<button>
									<HiOutlineArrowNarrowLeft color="#fff" size={22} />
								</button>
								<button>
									<HiOutlineArrowNarrowRight color="#fff" size={22} />
								</button>
							</div>
						</div>
						<div className="header__main__inside__cosmetology__right">
							<img src={herderImg} alt="" />
						</div>
					</div> */}
					<HeaderSwiper />
					<ul className="header__main__inside__bottom">
						{clients.map((item) => (
							<li
								className={`header__main__inside__bottom__inside ${
									activeLi === item.id ? "activeLI" : ""
								}`}
								key={item.id}
								onClick={() => setActiveLi(item.id)}
							>
								{item.title}
							</li>
						))}
					</ul>
				</div>
			</div>
		</header>
	);
};

export default Header;
