import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Button } from "react-bootstrap";
import "../../img/profesionals.jpg";
import "../../styles/profesionals.scss";
import PropTypes from "prop-types";
import CardMedia from "@material-ui/core/CardMedia";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import CardMaterial from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

const Usuario = props => {
	const { store, actions } = useContext(Context);
	const { currentUser, serviciosIdUser } = store;

	const getServiciosByUser = () => {
		actions.getServiciosIDUser(currentUser.id);
	};

	const removeService = (index, id) => {
		actions.fetchDeleteServicio(index, id);
	};

	useEffect(() => {
		getServiciosByUser();
	}, []);

	return (
		<Grid container item xs={12} style={{ paddingBottom: 50 }}>
			<div className="landing container-fluid">
				<CardMaterial style={{ marginBottom: 20 }}>
					<CardContent>
						<Grid container item xs={12} spacing={2}>
							<Grid container item xs={4} justifyContent="center" alignItems="center">
								<CardMedia
									component="img"
									alt=""
									height="100%"
									width="100%"
									image={currentUser.foto}
									title=""
								/>
							</Grid>

							<Grid container item xs={4} justifyContent="center" alignItems="center">
								<Grid container item xs={12}>
									<Grid container>
										<Typography variant={"h4"}>{`${currentUser.nombreUsr}`}</Typography>
									</Grid>
									<Grid container>
										<Typography variant={"h6"}>{`${currentUser.correoUsr}`}</Typography>
									</Grid>
									<Grid container>
										<Typography variant={"h6"}>{`${currentUser.direccion}`}</Typography>
									</Grid>
									<Grid container>
										<Typography variant={"h6"}>{`${currentUser.numPhone}`}</Typography>
									</Grid>
								</Grid>
							</Grid>
							<Grid container item xs={4} justifyContent="center" alignItems="center">
								<Link to="/servicios">
									<Button variant="info" size="lg">
										Añadir servicio
									</Button>
								</Link>
							</Grid>
						</Grid>
					</CardContent>
				</CardMaterial>

				<CardMaterial style={{ marginBottom: 20 }}>
					<CardHeader title={<Typography variant={"h4"}>{`Mis servicios`}</Typography>} />
					<Divider style={{ backgroundColor: "black" }} />
					<CardContent>
						{serviciosIdUser.map((currentService, indexService) => {
							return (
								<Grid container item xs={12} spacing={2} key={indexService}>
									<Grid container item xs={4} justifyContent="center" alignItems="center">
										<CardMedia
											component="img"
											alt=""
											height="100%"
											width="100%"
											image={currentService.foto}
											title=""
										/>
									</Grid>

									<Grid container item xs={6} justifyContent="center" alignItems="center">
										<Grid container item xs={12}>
											<Grid container>
												<Typography variant={"h4"}>{`${
													currentService.nombreServicio
												}`}</Typography>
											</Grid>
											<Grid container>
												<Typography variant={"h6"}>{`${
													currentService.descripcion
												}`}</Typography>
											</Grid>
											<Grid container>
												<Typography variant={"h6"}>{`${
													currentService.nombreCategoria
												}`}</Typography>
											</Grid>
										</Grid>
									</Grid>

									<Grid container item xs={2} justifyContent="center" alignItems="center">
										<IconButton onClick={() => removeService(indexService, currentService.id)}>
											<DeleteIcon style={{ color: "red" }} />
										</IconButton>

										<IconButton
											onClick={() =>
												window.location.replace(`/servicios?id=${currentService.id}`)
											}>
											<EditIcon style={{ color: "#0dcaf0" }} />
										</IconButton>
									</Grid>
								</Grid>
							);
						})}
					</CardContent>
				</CardMaterial>
			</div>
		</Grid>
	);
};

Usuario.propTypes = {
	indexNuevo: PropTypes.number,
	element: PropTypes.object,
	image: PropTypes.string,
	isUsuarios: PropTypes.bool
};

export default Usuario;
