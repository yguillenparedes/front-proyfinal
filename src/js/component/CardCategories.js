import React, { useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import CardMedia from "@material-ui/core/CardMedia";

const CardCategories = props => {
	const { actions } = useContext(Context);
	const { element, indexNuevo, image } = props;
	// eslint-disable-next-line no-console
	console.log(element);

	return (
		<div className="container  border1 mb-5 bg-light">
			<div className="row pt-3 pb-2 ">
				<div className="col-3 ml-5 pt-2 ">
					<CardMedia component="img" alt="" height="200" width="400" image={image} title="" />
				</div>

				<div className="col-5 px-5 m-auto">
					<ul>
						<h4>{element.nombreCategoria}</h4>
					</ul>
				</div>
			</div>
		</div>
	);
};

CardCategories.propTypes = {
	indexNuevo: PropTypes.number,
	element: PropTypes.object,
	image: PropTypes.string
};

export default CardCategories;
