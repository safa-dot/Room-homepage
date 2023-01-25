import React from "react";
import "./home.css";
import ImageSlider from "../ImageSlider/ImageSlider";

import darkimg from "../../assets/images/image-about-dark.jpg";
import lightimg from "../../assets/images/image-about-light.jpg";
import image1 from "../../assets/images/desktop-image-hero-1.jpg";
import image2 from "../../assets/images/desktop-image-hero-2.jpg";
import image3 from "../../assets/images/desktop-image-hero-3.jpg";

function Home() {
	const slides = [
		{
			image: image1,
			title: "Discover innovative ways to decorate",
			desc: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
		},
		{
			image: image2,
			title: " We are available all across the globe",
			desc: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
		},
		{
			image: image3,
			title: " Manufactured with the best materials",
			desc: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
		},
	];

	return (
		<div className="container-fluid home-container ">
			<ImageSlider slides={slides} />

			<div className="row justify-content-between">
				<div className=" col-12 col-md-12 col-lg-3 dark-img p-0" >
					<img className="dark col-12 col-md-12 col-lg-12" src={darkimg} alt="dark" />
				</div>
				<div className="about col-12 col-lg-5 ">
					<h4>ABOUT OUR FURNITURE</h4>
					<p>
						Our multifunctional collection blends design and function to suit
						your individual taste. Make each room unique, or pick a cohesive
						theme that best express your interests and what inspires you. Find
						the furniture pieces you need, from traditional to contemporary
						styles or anything in between. Product specialists are available to
						help you create your dream space.
					</p>
				</div>
				<div className="col-12 col-md-12 col-lg-4  light-img p-0">
					<img className="light col-12 col-lg-12 " src={lightimg} alt="light" />
				</div>
			</div>
		</div>
	);
}

export default Home;
