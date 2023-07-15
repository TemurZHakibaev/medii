import "./News.scss";
import {
	card1Img,
	card2Img,
	card3Img,
	card4Img,
} from "../../../assets/images/index";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const News = () => {
	const card = [
		{
			id: 1,
			img: card1Img,
			category: "Косметология",
			title: "Лазерное и фотоомоложение",
		},
		{
			id: 2,
			img: card2Img,
			category: "Косметология",
			title: "Лазерное и фотоомоложение",
		},
		{
			id: 3,
			img: card3Img,
			category: "Косметология",
			title: "Лазерное и фотоомоложение",
		},
		{
			id: 4,
			img: card4Img,
			category: "Косметология",
			title: "Лазерное и фотоомоложение",
		},
	];

	return (
		<section className="news">
			<h2>Актуальные спецпредложения </h2>
			<div className="news__card container">
				{card.map((item) => (
					<div className="news__card__inside">
						<div className="news__card__inside__top">
							<img src={item.img} alt="" />
							<span>{item.category}</span>
						</div>

						<div className="news__card__inside__bottom">
							<p>{item.title}</p>
							<span>
								<HiOutlineArrowNarrowRight color="#fff" size={18} />
							</span>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default News;
