import React from "react";
import PropTypes from "prop-types";
import CardMedia from "@material-ui/core/CardMedia";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";

const CardServicios = props => {
	const { element } = props;

	return (
		<Card style={{ marginBottom: 20 }}>
			<CardContent>
				<Grid container item xs={12}>
					<Grid container item xs={4}>
						<CardMedia component="img" alt="" height="100%" width="100%" image={element.foto} title="" />
					</Grid>

					<Grid container item xs={8}>
						<ul>
							<h2 className="text-center p-3 mb-3">{element.nombreServicio}</h2>
							<div className="row">
								<div className="fas fa-file-signature col-1 pt-1" />
								<div className=" col-10 pl-1">{element.nombreCategoria}</div>
							</div>

							<div className="row">
								<div className="fas fa-book-open col-1 pt-1" />
								<div className=" col-10 pl-1">{element.descripcion}</div>
							</div>

							<div className="row">
								<div className="fas fa-key col-1 pt-1" />
								<div className=" col-10 pl-1">{element.palabrasClave}</div>
							</div>

							<div className="row">
								<div className="fas fa-graduation-cap col-1 pt-1" />
								<div className=" col-10 pl-1">{element.txCredenciales}</div>
							</div>

							<div className="row">
								<div className="far fa-calendar-alt col-1 pt-1 pl-3" />
								<div className=" col-10 pl-1">{element.fePublicacion}</div>
							</div>
						</ul>
					</Grid>
				</Grid>
			</CardContent>
		</Card>
	);
};

CardServicios.propTypes = {
	indexNuevo: PropTypes.number,
	element: PropTypes.object,
	image: PropTypes.string,
	isUsuarios: PropTypes.bool
};

export default CardServicios;
