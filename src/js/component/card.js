import React, { useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import CardMedia from "@material-ui/core/CardMedia";

const Card = props => {
	const { actions } = useContext(Context);
	const { element } = props;

	return (
		<div className="container  border1 mb-5 bg-light">
			<div className="row pt-3 pb-2 ">
				<div className="col-3 ml-5 pt-2 pb-3 ">
					<CardMedia component="img" alt="" height="300" width="300" image={element.foto} title="" />
				</div>

				<div className="col-9 px-5 m-auto">
					<ul>
						<h2 className="text-center p-3 mb-3">{element.nombreUsr}</h2>
						<div className="row">
							<div className="fas fa-envelope col-1 pt-1" />
							<div className=" col-10 pl-1">{element.correoUsr}</div>
						</div>

						<div className="row">
							<div className="fas fa-id-card col-1 pt-1" />
							<div className=" col-10 pl-1">{element.cedula}</div>
						</div>

						<div className="row">
							<div className="fas fa-mobile-alt col-1 pt-1" />
							<div className=" col-10 pl-1">{element.numPhone}</div>
						</div>

						<div className="row">
							<div className="fas fa-briefcase col-1 pt-1" />
							<div className=" col-10 pl-1">{element.txCredenciales}</div>
						</div>

						<div className="row">
							<div className="fas fa-birthday-cake col-1 pt-1 pl-3" />
							<div className=" col-10 pl-1">{element.feRegistro}</div>
						</div>

						<div className="row">
							<div className="fas fa-map-marker-alt col-1 pt-1 pl-3" />
							<div className=" col-10 pl-1">{element.direccion}</div>
						</div>
					</ul>
				</div>
			</div>
		</div>
	);
};

Card.propTypes = {
	indexNuevo: PropTypes.number,
	element: PropTypes.object,
	image: PropTypes.string,
	isUsuarios: PropTypes.bool
};

export default Card;
