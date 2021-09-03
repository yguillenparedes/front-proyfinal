import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "../../img/profesionals.jpg";
import "../../styles/profesionals.scss";
import PropTypes from "prop-types";
import CardMedia from "@material-ui/core/CardMedia";
import { Link } from "react-router-dom";

const Usuario = props => {
	const { actions, store } = useContext(Context);
	const usuario1 = store.usuarios[0];
	console.log(usuario1);

	return (
		<div className="landing container-fluid">
			<div className="profesionals text-center col-12 d-flex">
				<div className="col-6 d-flex justify-content-center">
					<div className="col-3 ml-5 pt-2 pb-3 ">
						<CardMedia component="img" alt="" height="300" width="300" image={"hola"} title="" />
					</div>
				</div>

				<div className="col-3">
					<div className="probutton">
						<h2>Lorem Ipsum</h2>
						<p>Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
					</div>
				</div>
				<div className="col-3">
					<div className="probutton">
						<Link to="/servicios">
							<Button variant="info" size="lg">
								Añadir servicio
							</Button>
						</Link>
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
};

Usuario.propTypes = {
	indexNuevo: PropTypes.number,
	element: PropTypes.object,
	image: PropTypes.string,
	isUsuarios: PropTypes.bool
};

export default Usuario;
