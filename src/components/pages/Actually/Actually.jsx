import "./Actually.scss";
import { section1Img, section11 } from "../../../assets/images/index";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { useState } from "react";

const Actually = () => {
	const [activeTitle, setActiveTitle] = useState(3);
	const [activeText, setActiveText] = useState(1);

	const item = [
		{ id: 1, num: 78, title: "Современных центра в странах СНГ" },
		{ id: 2, num: 78, title: "Современных центра в странах СНГ" },
		{ id: 3, num: 20, title: "Уникальных патентов в области косметологии" },
		{ id: 4, num: 78, title: "Современных центра в странах СНГ" },
	];

	const news = [
		{
			id: 1,
			title:
				"Почему рекомендуется посещать профессионального косметолога. Мнение специалистов центра",
		},
		{
			id: 2,
			title:
				"Стандартизация деятельности клиник в соответствии с ISO 9001:2015.",
		},
		{
			id: 3,
			title:
				"Индивидуальный подход к каждому пациенту и подбор оптимальных косметологических методик.",
		},
	];

	const newsQuestions = [
		{
			id: 1,
			title:
				"Процедуры аппаратной косметологии на оборудовании экспертного класса от ведущих мировых производителей могут проводиться в любом возрасте и решать широкий спектр проблем: возрастные изменения, покраснения, акне и купероз, потеря тонуса и упругости кожи, отечность, целлюлит и т. п.",
		},
		{
			id: 2,
			title:
				"С помощью инъекционных методик мы можем разгладить морщины, провести объёмное моделирование, увлажнить кожу, ввести активные вещества в поверхностные и средние слои кожи, запустить процессы омоложения.",
		},
		{
			id: 3,
			title:
				"Лазерное и фотоомоложение помогут запустить процесс синтеза собственного коллагена, улучшить светооптические свойства кожи, а также получить максимальный эффект подтяжки лица без уколов и длительного восстановительного периода.",
		},
		{
			id: 4,
			title:
				"Курс процедур лазерной эпиляции поможет навсегда избавиться от проблемы нежелательных волос.",
		},
	];

	return (
		<section className="actually container">
			<div className="actually__top">
				<div className="actually__top__left">
					<div className="actually__top__left__top">
						<span>Инновации</span>
						<h2>Мы практикуем новый курс процедур аппаратной косметологии </h2>
						<div className="actually__top__left__top__button">
							<span>
								<HiOutlineArrowNarrowRight />
							</span>
							<p>Подробнее</p>
						</div>
					</div>
					<div className="actually__top__left__bottom">
						<img src={section1Img} alt="" />
					</div>
				</div>
				<div className="actually__top__right">
					<div className="actually__top__right__left">
						<span>Эстетика красоты</span>
						<ul className="actually__top__right__left__list">
							{item.map((item) => (
								<li
									onClick={() => setActiveTitle(item.id)}
									className={`actually__top__right__left__list__inside ${
										activeTitle === item.id ? "activeTitle" : ""
									}`}
									key={item.id}
								>
									<span>{item.num}</span>
									<p>{item.title}</p>
								</li>
							))}
						</ul>
					</div>
					<div className="actually__top__right__right">
						<img src={section11} alt="" />
					</div>
				</div>
			</div>
			<div className="actually__bottom">
				<div className="actually__bottom__left">
					<span>Новости</span>
					{news.map((item) => (
						<p
							onClick={() => setActiveText(item.id)}
							key={item.id}
							className={`actually__bottom__left__text ${
								activeText === item.id ? "activeText" : ""
							}`}
						>
							{item.title}
						</p>
					))}
				</div>
				<div className="actually__bottom__right">
					<h2>
						Почему рекомендуется посещать профессионального косметолога. Мнение
						специалистов центра
					</h2>
					<ul className="actually__bottom__right__list">
						{newsQuestions.map((item) => (
							<li key={item.id}>
								<p>{item.title}</p>
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
};

export default Actually;
