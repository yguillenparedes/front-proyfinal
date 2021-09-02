import React from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "../../img/profesionals.jpg";
import "../../styles/profesionals.scss";

export const Usuario = () => (
	<div className="landing container-fluid">
		<div className="profesionals text-center col-12 d-flex">
			<div className="col-6 d-flex justify-content-center">
				<Card style={{ width: "32rem", height: "27rem" }}>
					<Card.Img variant="top" src="profesionals.jpg" style={{ width: "32rem", height: "27rem" }} />
				</Card>
			</div>

			<div className="col-3">
				<div className="probutton">
					<h2>Lorem Ipsum</h2>
					<p>Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
				</div>
			</div>
			<div className="col-3">
				<div className="probutton">
					<Button variant="info" size="lg">
						Añadir servicio
					</Button>
				</div>
			</div>
		</div>
		<div className="row">
			<div className="col-sm-4">
				<div className="card">
					<div className="card-body">
						<h5 className="card-title">Otro servicio</h5>
					</div>
				</div>
			</div>
			<div className="col-sm-4">
				<div className="card">
					<div className="card-body">
						<h5 className="card-title">Otro servicio</h5>
					</div>
				</div>
			</div>
			<div className="col-sm-4">
				<div className="card">
					<div className="card-body">
						<h5 className="card-title">Otro servicio</h5>
					</div>
				</div>
			</div>
		</div>
	</div>
);
