import { height } from "@material-ui/system";
import React from "react";
import { Card } from "react-bootstrap";
import { Image } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../img/profesionals.jpg";
import "../../img/Inicia-sesion.png";
import "../../img/busca-profesional.png";
import "../../img/contrata.png";
import "../../styles/home.scss";
import "../../img/jo-szczepanska-9OKGEVJiTKk-unsplash.jpg";

export const Home = () => (
	<div className="landing container-fluid">
		<div className="jumbotron text-center mt-5 col-12">
			<h1>Profesionales al alcance de un Click</h1>

			<div className="content mt-5 text-center">
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
					et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat.
				</p>
			</div>
		</div>
		<div className="profesionals text-center col-12 d-flex">
			<div className="col-6">
				<div className="probutton">
					<Link to="/Professionals/">
						<Button variant="info" size="lg">
							Estos son nuestros profesionales
						</Button>
					</Link>
				</div>
			</div>

			<div className="col-6">
				<Image src="profesionals.jpg" style={{ width: "32rem", height: "27rem" }} roundedCircle />
			</div>
		</div>
		<div className="function text-center">
			<h2 className="mb-5">¿Como Funciona?</h2>
			<div className="container-fluid d-flex col-12 text-center">
				<div className="col-4">
					<Image src="Inicia-sesion.png" style={{ width: "20rem", height: "20rem" }} />
					<p>hola hola</p>
				</div>
				<div className="col-4">
					<Image src="busca-profesional.png" style={{ width: "20rem", height: "20rem" }} />
					<p>hola hola</p>
				</div>
				<div className="col-4">
					<Image src="contrata.png" style={{ width: "20rem", height: "20rem" }} />
					<p>hola hola</p>
				</div>
			</div>
		</div>
	</div>
);
