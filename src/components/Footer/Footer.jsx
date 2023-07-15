import "./Footer.scss";
import {
	yey,
	facebook,
	instagram,
	vk,
	youtube,
} from "../../assets/images/index";

const Footer = () => {
	const links = [
		{
			id: 1,
			title: "Услуги",
			subTitle: [
				{ id: 1, title: "Косметология" },
				{ id: 2, title: "Пластическая хирургия" },
				{ id: 3, title: "Стоматология" },
				{ id: 4, title: "Лазерная медицина" },
			],
		},
		{
			id: 2,
			title: "Услуги",
			subTitle: [
				{ id: 1, title: "Косметология" },
				{ id: 2, title: "Пластическая хирургия" },
				{ id: 3, title: "Стоматология" },
				{ id: 4, title: "Лазерная медицина" },
			],
		},
		{
			id: 3,
			title: "Услуги",
			subTitle: [
				{ id: 1, title: "Косметология" },
				{ id: 2, title: "Пластическая хирургия" },
				{ id: 3, title: "Стоматология" },
				{ id: 4, title: "Лазерная медицина" },
			],
		},
		{
			id: 4,
			title: "Услуги",
			subTitle: [
				{ id: 1, title: "Косметология" },
				{ id: 2, title: "Пластическая хирургия" },
				{ id: 3, title: "Стоматология" },
				{ id: 4, title: "Лазерная медицина" },
			],
		},
		{
			id: 5,
			title: "Услуги",
			subTitle: [
				{ id: 1, title: "Косметология" },
				{ id: 2, title: "Пластическая хирургия" },
				{ id: 3, title: "Стоматология" },
				{ id: 4, title: "Лазерная медицина" },
			],
		},
		{
			id: 6,
			title: "Услуги",
			subTitle: [
				{ id: 1, title: "Косметология" },
				{ id: 2, title: "Пластическая хирургия" },
				{ id: 3, title: "Стоматология" },
				{ id: 4, title: "Лазерная медицина" },
			],
		},
	];
	return (
		<div className="footer container">
			<div className="footer__nav">
				<div className="footer__nav__left">
					{links.map((item) => (
						<ul className="footer__nav__list">
							<li className="footer__nav__list__title">{item.title}</li>
							<li>
								{item.subTitle.map((title) => (
									<p className="footer__nav__list__subTitle" key={title.id}>
										{title.title}
									</p>
								))}
							</li>
						</ul>
					))}
				</div>
				<div className="footer__nav__right">
					<div className="footer__nav__right__block">
						<span>телефон</span>
						<h3>+7 (812) 123-45-67</h3>
					</div>
					<div className="footer__nav__right__block">
						<span>адрес</span>
						<h3>Невский пр. 140, пом. 10</h3>
						<button>как проехать?</button>
					</div>
					<div className="footer__nav__right__block">
						<span>адрес</span>
						<h3>Большой пр. 12</h3>
						<button>как проехать?</button>
					</div>
				</div>
			</div>
			<div className="footer__bottom">
				<div className="footer__bottom__left">
					<p>
						(c) 2021. Центр космелогии. Все права защищены. Наши сертификаты на
						осуществление деятельности. Патенты на использование технологий.
					</p>
					<span>Политика конфиденциальности</span>
				</div>
				<ul className="footer__bottom__right">
					<li></li>
					<li>
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
			</div>
		</div>
	);
};

export default Footer;
