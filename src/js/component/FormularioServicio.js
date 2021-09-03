import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import Button from "@material-ui/core/Button";
import "../../styles/home.scss";
import queryString from "query-string";
import Modal from "./Modall";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import SaveIcon from "@material-ui/icons/Save";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import Select from "@material-ui/core/Select";
import Typography from "@material-ui/core/Typography";

const servicio_id = "SERVICIO_ID";
const urlServicios = "http://127.0.0.1:5000/servicios/";
const urlServiciosID = `${urlServicios}${servicio_id}`;

const MESSAGE_ERROR = {
	title: "Tienes un problema",
	description: `Lo sentimos, tu servicio tiene un error, vuelve a intentarlo`
};

const MESSAGE_SUCCESS = {
	title: "Correcto!",
	description: `Tu servicio ha sido creado con éxito!`
};

const MESSAGE_SUCCESS_EDIT = {
	title: "Correcto!",
	description: `Tu Usuario fue modificado!`
};

export const FormularioServicio = () => {
	const [nombreServicio, setNombreServicio] = useState("");
	const [idUsrVende, setIdUsrVende] = useState("");
	const [fePublicacion, setFePublicacion] = useState("");
	const [descripcion, setDescripcion] = useState("");
	const [txCredenciales, setTxCredenciales] = useState("");
	const [nombreCategoria, setNombreCategoria] = useState("");
	const [statusServicio, setStatusServicio] = useState("");
	const [inDomicilio, setInDomicilio] = React.useState(false);
	const [palabrasClave, setPalabrasClave] = useState("");
	const [foto, setFoto] = useState("");

	const [open, setOpen] = React.useState(false);
	const { actions, store } = useContext(Context);
	const { currentUser, categorias } = store;
	const [message, setMessage] = useState({});

	const handleChangeFoto = event => {
		const formData = new FormData();
		formData.append("file", event.target.files[0]);
		formData.append("upload_preset", "bz7oymlj");

		const options = {
			method: "POST",
			body: formData
		};
		return fetch(`https://api.Cloudinary.com/v1_1/proyectofinal4geek/image/upload`, options)
			.then(res => res.json())
			.then(res => setFoto(res.secure_url))
			.catch(err => console.log(err));
	};

	const handleClose = () => {
		setOpen(false);
	};

	const enviarDatos = () => {
		let currentServicio = queryString.parse(location.search).id;

		const payload = {
			nombreServicio: nombreServicio,
			idUsrVende: currentUser.id,
			descripcion: descripcion,
			fePublicacion: fePublicacion,
			txCredenciales: txCredenciales,
			statusServicio: statusServicio,
			palabrasClave: palabrasClave,
			foto: foto,
			inDomicilio: inDomicilio,
			idCategoria: nombreCategoria
		};

		if (currentServicio === null || currentServicio === undefined) actions.fetchNewServicio(payload, exito, error);
		else actions.fetchEditServiciosUser(payload, currentServicio, exitoEditUsuario, error);
	};

	const exito = () => {
		setMessage(MESSAGE_SUCCESS);
		setOpen(true);
	};

	const error = () => {
		setMessage(MESSAGE_ERROR);
		setOpen(true);
	};

	const exitoEditUsuario = () => {
		setMessage(MESSAGE_SUCCESS_EDIT);
		setOpen(true);
	};

	const getCurrentServicio = currentServicio => {
		const url = urlServiciosID.replace(servicio_id, currentServicio);
		fetch(url)
			.then(respuesta => respuesta.json())
			.then(data => {
				let currentServicio = data.servicio;
				setNombreServicio(currentServicio.nombreServicio);
				setIdUsrVende(currentServicio.idUsrVende);
				setNombreCategoria(currentServicio.nombreCategoria);
				setFoto(currentServicio.foto);
				setTxCredenciales(currentServicio.txCredenciales);
				setFePublicacion(currentServicio.fePublicacion);
				setStatusServicio(currentServicio.statusServicio);
				setPalabrasClave(currentServicio.palabrasClave);
				setDescripcion(currentServicio.descripcion);
				setInDomicilio(currentServicio.inDomicilio);
			});
	};

	useEffect(() => {
		let currentServicio = queryString.parse(location.search).id;

		if (currentServicio !== null && currentServicio !== undefined) getCurrentServicio(currentServicio);
	}, []);

	const handleChange = event => {
		setInDomicilio(event.target.checked);
	};

	return (
		<div className="container text-center my-5 ">
			<Modal open={open} handleClose={handleClose} message={message} />
			<Container>
				<ValidatorForm noValidate autoComplete="off" onSubmit={enviarDatos}>
					<div ClassName="row">
						<div
							className="mb-5 p-3 text-center"
							style={{
								boxShadow:
									"rgb(0 0 0 / 20%) 0px 2px 1px -1px, rgb(0 0 0 / 14%) 0px 1px 3px 0px, rgb(0 0 0 / 12%) 0px 1px 1px 0px",
								marginBottom: 50,
								backgroundColor: "rgba(23, 165, 151, 0.768)",
								borderRadius: 4
							}}>
							<Typography variant="h3" style={{ color: "white" }}>
								Formulario de registro de servicios
							</Typography>
						</div>
					</div>

					<div className="bg-light pt-5 pb-5">
						<div className="forms row col-12">
							<Grid container item xs={6} justifyContent="center" alignItems="center">
								Nombre Categoria
							</Grid>
							<div className="col-6 mb-3">
								<Select
									fullWidth
									margin="normal"
									native
									label="Categoria"
									inputProps={{
										nombreCategoria: "nombreCategoria",
										id: "outlined-age-native-simple"
									}}
									variant="outlined"
									value={nombreCategoria}
									onChange={event => setNombreCategoria(event.target.value)}
									validators={["required"]}
									errorMessages={["this field is required"]}>
									<>
										<option disabled value="">
											Seleccione una opcion
										</option>

										{categorias.map((currentCategory, index) => {
											return (
												<option key={index} value={currentCategory.id}>
													{currentCategory.nombreCategoria}
												</option>
											);
										})}
									</>
								</Select>
							</div>
						</div>

						<div className="forms row col-12 ">
							<Grid container item xs={6} justifyContent="center" alignItems="center">
								Nombre Servicio
							</Grid>
							<div className="col-6 mb-3">
								<TextValidator
									fullWidth
									margin="normal"
									label="Nombre de servicio"
									id="outlined-size-normal"
									variant="outlined"
									value={nombreServicio}
									onChange={event => setNombreServicio(event.target.value)}
									validators={["required"]}
									errorMessages={["this field is required"]}
								/>
							</div>
						</div>

						<div className="forms row col-12">
							<Grid container item xs={6} justifyContent="center" alignItems="center">
								Descripcion
							</Grid>
							<div className="col-6 mb-3">
								<TextValidator
									fullWidth
									label="Breve Descripcion"
									id="outlined-multiline-static"
									variant="outlined"
									multiline
									maxRows={4}
									value={descripcion}
									onChange={event => setDescripcion(event.target.value)}
									validators={["required"]}
									errorMessages={["this field is required"]}
								/>
							</div>
						</div>

						<div className="forms row col-12">
							<Grid container item xs={6} justifyContent="center" alignItems="center">
								Palabras claves
							</Grid>
							<div className="col-6 mb-3">
								<TextValidator
									fullWidth
									margin="normal"
									label="Palabras Claves"
									id="outlined-size-normal"
									variant="outlined"
									value={palabrasClave}
									onChange={event => setPalabrasClave(event.target.value)}
									validators={["required"]}
									errorMessages={["this field is required"]}
								/>
							</div>
						</div>

						<div className="forms row col-12">
							<Grid container item xs={6} justifyContent="center" alignItems="center">
								En Domicilio
							</Grid>
							<div className="col-6 mb-3">
								<FormGroup row>
									<FormControlLabel
										control={
											<Checkbox
												checked={inDomicilio}
												onChange={handleChange}
												name="checkedB"
												color="primary"
											/>
										}
										label="Sí"
									/>
								</FormGroup>
							</div>
						</div>

						<div className="forms row col-12">
							<Grid container item xs={6} justifyContent="center" alignItems="center">
								Fecha de Publicación
							</Grid>
							<div className="col-6 mb-3">
								<TextValidator
									fullWidth
									margin="normal"
									id="outlined-size-normal"
									type="date"
									variant="outlined"
									defaultValue="2017-05-24"
									value={fePublicacion}
									onChange={event => setFePublicacion(event.target.value)}
									validators={["required"]}
									errorMessages={["this field is required"]}
								/>
							</div>
						</div>

						<div className="forms row col-12">
							<Grid container item xs={6} justifyContent="center" alignItems="center">
								Estado de servicio
							</Grid>
							<div className="col-6 mb-3">
								<Select
									fullWidth
									margin="normal"
									label="Estado de servicio"
									inputProps={{
										statusServicio: "statusServicio",
										id: "outlined-age-native-simple"
									}}
									type="text"
									variant="outlined"
									value={statusServicio}
									onChange={event => setStatusServicio(event.target.value)}
									validators={["required"]}
									errorMessages={["this field is required"]}>
									<option disabled value="">
										Seleccione una opcion
									</option>
									<option value={1}>Activo</option>
									<option value={2}>Inactivo</option>
								</Select>
							</div>
						</div>

						<div className="forms row col-12">
							<Grid container item xs={6} justifyContent="center" alignItems="center">
								Credenciales
							</Grid>
							<div className="col-6 mb-3">
								<TextValidator
									fullWidth
									margin="normal"
									label="Credenciales"
									id="outlined-size-normal"
									type="text"
									variant="outlined"
									multiline
									maxRows={4}
									value={txCredenciales}
									onChange={event => setTxCredenciales(event.target.value)}
									validators={["required"]}
									errorMessages={["this field is required"]}
									helperText="20 años de experiencia...."
								/>
							</div>
						</div>

						<div className="forms row col-12">
							<Grid container item xs={6} justifyContent="center" alignItems="center">
								Image
							</Grid>
							<div className="col-6 mb-3">
								<TextValidator
									fullWidth
									margin="normal"
									id="outlined-size-normal"
									type="file"
									variant="outlined"
									onChange={event => handleChangeFoto(event)}
									accept="image/*"
								/>
							</div>
						</div>
						<div className="register">
							<Grid container justifyContent="center" item xs={12}>
								<Button
									variant="contained"
									size="large"
									color="primary"
									startIcon={<SaveIcon />}
									type="submit">
									Save
								</Button>
							</Grid>
						</div>
					</div>
				</ValidatorForm>
			</Container>
		</div>
	);
};
