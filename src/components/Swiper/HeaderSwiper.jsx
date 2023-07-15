import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {
	HiOutlineArrowNarrowLeft,
	HiOutlineArrowNarrowRight,
} from "react-icons/hi";
import { herderImg, youtube } from "../../assets/images/index";

const HeaderSwiper = () => {
	return (
		<div>
			<Swiper
				modules={[Navigation, Pagination, Scrollbar, A11y]}
				spaceBetween={50}
				slidesPerView={1}
				navigation={{
					nextEl: ".button-next-news",
					prevEl: ".button-prev-news",
				}}
				pagination={{ clickable: true }}
				onSwiper={(swiper) => console.log(swiper)}
				onSlideChange={() => console.log("slide change")}
			>
				<SwiperSlide>
					<div className="header__main__inside__cosmetology">
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
								<button className="button-prev-news">
									<HiOutlineArrowNarrowLeft color="#fff" size={22} />
								</button>
								<button className="button-next-news">
									<HiOutlineArrowNarrowRight color="#fff" size={22} />
								</button>
							</div>
						</div>
						<div className="header__main__inside__cosmetology__right">
							<img src={herderImg} alt="" />
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="header__main__inside__cosmetology">
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
							<div className="header__main__inside__cosmetology__left__arrow ">
								<div className="header__main__inside__cosmetology__left__arrow navigate_buttons">
									<button className="button-prev-news">
										<HiOutlineArrowNarrowLeft color="#fff" size={22} />
									</button>
									<button className="button-next-news">
										<HiOutlineArrowNarrowRight color="#fff" size={22} />
									</button>
								</div>
							</div>
						</div>
						<div className="header__main__inside__cosmetology__right">
							<img src={herderImg} alt="" />
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="header__main__inside__cosmetology">
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
								<button className="button-prev-news">
									<HiOutlineArrowNarrowLeft color="#fff" size={22} />
								</button>
								<button className="button-next-news">
									<HiOutlineArrowNarrowRight color="#fff" size={22} />
								</button>
							</div>
						</div>
						<div className="header__main__inside__cosmetology__right">
							<img src={herderImg} alt="" />
						</div>
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default HeaderSwiper;
