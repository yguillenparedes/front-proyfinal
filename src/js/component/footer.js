import React, { Component } from "react";
import "../../styles/footer.scss";
import "../../img/logo-4geeks.png";

export const Footer = () => (
	<footer className="footer mt-auto pt-3 col-12 d-flex text-center">
		<div className="navbar-brand col-4 mb-0 h1">P.A.H (Proffesionals At Home)</div>
		<div className="col-4 h2">
			<p>
				Made with <i className="fa fa-heart text-danger" /> by A.D.J.Y
			</p>
		</div>
		<div className="col-4">
			<img src="logo-4geeks.png" />
		</div>
	</footer>
);
