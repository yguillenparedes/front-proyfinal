import { height } from "@material-ui/system";
import React from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "../../img/profesionals.jpg";
import "../../styles/home.scss";

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
					<Button variant="info" size="lg">
						Estos son nuestros profesionales
					</Button>
				</div>
			</div>

			<div className="col-6">
				<Card style={{ width: "32rem", height: "27rem" }}>
					<Card.Img variant="top" src="profesionals.jpg/" style={{ width: "32rem", height: "27rem" }} />
				</Card>
			</div>
		</div>
		<div className="function text-center">
			<h2 className="mb-5">¿Como Funciona?</h2>
			<div className="container-fluid d-flex col-12 text-center">
				<div className="col-4">
					<Card style={{ width: "18rem" }}>
						<Card.Img variant="top" src="holder.js/100px180" />
						<Card.Body>
							<Card.Title>Card Title</Card.Title>
							<Card.Text>
								Some quick example text to build on the card title and make up the bulk of the content.
							</Card.Text>
						</Card.Body>
					</Card>
				</div>
				<div className="col-4">
					<Card style={{ width: "18rem" }}>
						<Card.Img variant="top" src="holder.js/100px180" />
						<Card.Body>
							<Card.Title>Card Title</Card.Title>
							<Card.Text>
								Some quick example text to build on the card title and make up the bulk of the content.
							</Card.Text>
						</Card.Body>
					</Card>
				</div>
				<div className="col-4">
					<Card style={{ width: "18rem" }}>
						<Card.Img variant="top" src="holder.js/100px180" />
						<Card.Body>
							<Card.Title>Card Title</Card.Title>
							<Card.Text>
								Some quick example text to build on the card title and make up the bulk of the content.
							</Card.Text>
						</Card.Body>
					</Card>
				</div>
			</div>
		</div>
	</div>
);
