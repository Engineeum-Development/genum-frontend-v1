import React from "react";
import "./Footer.css";
import { BiCopyright } from "react-icons/bi";
import { IoLogoFacebook } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { LuInstagram } from "react-icons/lu";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<div className="footer__container">
			<div className="footer__content-top">
				<div className="footer__content-top-logo">
					<p>genum</p>
					<div className="footer__container-top_socials">
						<IoLogoFacebook />
						<FaXTwitter />
						<LuInstagram />
						<FaLinkedin />
					</div>
				</div>
				<div className="footer__container-links">
					<div className="footer__container-links_section1">
						<h2>Product</h2>
						<div className="footer__container-links_section1-links">
							<p>Competitions</p>
							<p>Datasets</p>
							<p>Models</p>
							<p>Notebook</p>
							<p>Learn</p>
							<p>Discussions</p>
						</div>
					</div>
					<div className="footer__container-links_section1">
						<h2>Documentation</h2>
						<div className="footer__container-links_section1-links">
							<p>Competitions</p>
							<p>Datasets</p>
							<p>Models</p>
							<p>Notebook</p>
							<p>Public API</p>
						</div>
					</div>
					<div className="footer__container-links_section1">
						<h2>Company</h2>
						<div className="footer__container-links_section1-links">
							<p>Our Team</p>
							<p>Contact Us</p>
							<p>Host a Competition</p>
							<p>Terms</p>
							<p>Privay</p>
						</div>
					</div>
				</div>
			</div>
			<div className="footer__container-bottom">
				<p>
					<BiCopyright /> {currentYear} genum. All rights reserved.
				</p>
			</div>
		</div>
	);
}

export default Footer;