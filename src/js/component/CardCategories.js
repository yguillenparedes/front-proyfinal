import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import CardMedia from "@material-ui/core/CardMedia";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";

const CardCategories = props => {
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
							<Link to={`/servicios-category?id=${element.id}`}>
								<h4>{element.nombreCategoria}</h4>
							</Link>
						</ul>
					</Grid>
				</Grid>
			</CardContent>
		</Card>
	);
};

CardCategories.propTypes = {
	indexNuevo: PropTypes.number,
	element: PropTypes.object,
	image: PropTypes.string
};

export default CardCategories;
