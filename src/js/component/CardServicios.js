import React, { useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import IconButton from "@material-ui/core/IconButton";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";
import { blue } from "@material-ui/core/colors";
import CreateIcon from "@material-ui/icons/Create";
import { Link } from "react-router-dom";
import CardMedia from "@material-ui/core/CardMedia";

const CardServicios = props => {
	const { actions } = useContext(Context);
	const { element, indexNuevo, image, isUsuarios } = props;

	return (
		<div className="container  border1 mb-5 bg-light">
			<div className="row pt-3 pb-2 ">
				<div className="col-3 ml-5 pt-2 pb-3 ">
					<CardMedia component="img" alt="" height="300" width="300" image={element.foto} title="" />
				</div>

				<div className="col-9 px-5 m-auto">
					<ul>
						<h2 className="text-center p-3 mb-3">{element.nombreServicio}</h2>
						<div className="row">
							<div className="fas fa-envelope col-1 pt-1" />
							<div className=" col-10 pl-1">{element.nombreCategoria}</div>
						</div>

						<div className="row">
							<div className="fas fa-id-card col-1 pt-1" />
							<div className=" col-10 pl-1">{element.descripcion}</div>
						</div>

						<div className="row">
							<div className="fas fa-mobile-alt col-1 pt-1" />
							<div className=" col-10 pl-1">{element.palabrasClave}</div>
						</div>

						<div className="row">
							<div className="fas fa-briefcase col-1 pt-1" />
							<div className=" col-10 pl-1">{element.txCredenciales}</div>
						</div>

						<div className="row">
							<div className="fas fa-birthday-cake col-1 pt-1 pl-3" />
							<div className=" col-10 pl-1">{element.fePublicacion}</div>
						</div>
					</ul>
				</div>

				<div className="col-2">
					<Link to={`/servicios?id=${element.id}`}>
						<IconButton aria-label="create">
							<CreateIcon style={{ color: blue[900] }} />
						</IconButton>
					</Link>
					<IconButton aria-label="delete" onClick={() => actions.fetchDeleteServicio(indexNuevo, element.id)}>
						<DeleteRoundedIcon style={{ color: blue[900] }} />
					</IconButton>
				</div>
			</div>
		</div>
	);
};

CardServicios.propTypes = {
	indexNuevo: PropTypes.number,
	element: PropTypes.object,
	image: PropTypes.string,
	isUsuarios: PropTypes.bool
};

export default CardServicios;
