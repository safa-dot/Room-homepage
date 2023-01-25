import React, { useState } from "react";

import arrowRight from "../../assets/images/icon-angle-right.svg";
import arrowLeft from "../../assets/images/icon-angle-left.svg";
import arrow from "../../assets/images/icon-arrow.svg";

const ImageSlider = ({ slides }) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	function nextSlide() {
		const isLastSlide = currentIndex === slides.length - 1;
		const newIndex = isLastSlide ? 0 : currentIndex + 1;
		setCurrentIndex(newIndex);
	}

	function prevSlide() {
		const isFirstSlide = currentIndex === 0;
		const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
		setCurrentIndex(newIndex);
	}

	return (
		<div className="row first-row">
			<div className="col-12  col-lg-7 image-preview p-0">
				<img
					className="col-12  col-lg-12"
					src={slides[currentIndex].image}
					alt="furniture"
				/>
			</div>

			<div className="col-12 col-lg-5 desc-container p-0  ">
				<div className="col-12 col-lg-12 desc">
					<div>
						<div className="desc-title">
							<h1>{slides[currentIndex].title}</h1>
						</div>
						<div className="desc-parag ">
							<p>{slides[currentIndex].desc}</p>
						</div>
					</div>

					<div className="desc-btn pt-2">
						<button>
							SHOP NOW <img src={arrow} alt="arrow" />
						</button>
					</div>
				</div>
				<div className="desc-arrow col-4 col-sm-4 col-md-4 col-lg-3 d-flex justify-content-between text-center  m-0">
					<div className="col-lg-6  p-3 arrow" onClick={prevSlide}>
						<img
							className="col col-md-12 col-lg-5 "
							src={arrowLeft}
							alt="left"
							
						/>
					</div>
					<div className="col-lg-6 p-3 arrow" onClick={nextSlide}>
						<img
							className="col col-md-12 col-lg-5"
							src={arrowRight}
							alt="right"
							
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ImageSlider;
