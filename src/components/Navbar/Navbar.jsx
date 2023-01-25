import React from "react";
import "./navbar.css";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/images/logo.svg";
import IconBurgur from "../../assets/images/icon-hamburger.svg";

function Navbar() {
	return (
		<nav className="navbar navbar-expand-lg  fixed-top">
			<div className="container-fluid ps-5 pt-4">
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="offcanvas"
					data-bs-target="#offcanvasNavbar"
					aria-controls="offcanvasNavbar"
				>
					<span ><img src={IconBurgur} alt="burgericon" /></span>
				</button>

				<Link to="/" className="navbar-brand col-7 col-md-6 col-lg-1 ps-4">
					<img src={Logo} alt="logo" />
				</Link>
				<div
					className="offcanvas offcanvas-top"
					tabindex="-1"
					id="offcanvasNavbar"
					aria-labelledby="offcanvasNavbarLabel"
				>
					<div className="offcanvas-body row ">
						<div className="col-2 col-md-2 col-lg-1">
							<button
								type="button"
								className="btn-close navbar-toggler"
								data-bs-dismiss="offcanvas"
								aria-label="Close"
							></button>
						</div>
						<div className="navbar-nav col-10 col-md-10 col-lg-1 ">
							<li className="col-12  col-md-12 text-center ">
								<NavLink
									exact="true"
									activeclassname="active"
									className="home-link pe-4"
									to="/"
									aria-current="page"
								>
									<span >Home</span>
								</NavLink>
								<NavLink
									exact="true"
									activeclassname="active "
									className="shop-link pe-4 "
									to="/shop"
								>
									<span>Shop</span>
								</NavLink>
								<NavLink
									exact="true"
									activeclassname="active "
									className="about-link pe-4"
									to="/about"
								>
									<span>About</span>
								</NavLink>
								<NavLink
									exact="true"
									activeclassname="active "
									className="contact-link "
									to="/contact"
								>
									<span>Contact</span>
								</NavLink>
							</li>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
