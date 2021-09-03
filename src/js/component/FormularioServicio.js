import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
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

const servicio_id = "SERVICIO_ID";
const urlServicios = "http://127.0.0.1:5000/servicios/";
const urlServiciosID = `${urlServicios}${servicio_id}`;

const useStyles = makeStyles(theme => ({
	root: {
		"& .MuiTextField-root": {
			margin: theme.spacing(1),
			width: "25ch"
		}
	}
}));

export const FormularioServicio = () => {
	const classes = useStyles();
	const [nombreServicio, setNombreServicio] = useState("");
	const [idUsrVende, setIdUsrVende] = useState("");
	const [fePublicacion, setFePublicacion] = useState("");
	const [descripcion, setDescripcion] = useState("");
	const [txCredenciales, setTxCredenciales] = useState("");
	const [nombreCategoria, setNombreCategoria] = useState("");
	const [statusServicio, setStatusServicio] = useState("");
	const [inDomicilio, setInDomicilio] = React.useState({
		checkedA: false,
		checkedB: true
	});
	const [palabrasClave, setPalabrasClave] = useState("");
	const [foto, setFoto] = useState("");

	const [open, setOpen] = React.useState(false);
	const { actions } = useContext(Context);
	const [message, setMessage] = useState({});

	const handleClose = () => {
		setOpen(false);
	};

	const enviarDatos = () => {
		let currentServicio = queryString.parse(location.search).id;

		const payload = {
			nombreServicio: nombreServicio,
			idUsrVende: idUsrVende,
			descripcion: descripcion,
			fePublicacion: fePublicacion,
			txCredenciales: txCredenciales,
			nombreCategoria: nombreCategoria,
			statusServicio: statusServicio,
			palabrasClave: palabrasClave,
			foto: foto,
			inDomicilio: inDomicilio,

			idCategoria: 1
		};

		if (currentServicio === null || currentServicio === undefined) actions.fetchNewUsuario(payload, exito, error);
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
		const url = urlContact.replace(urlServiciosID, currentServicio);
		fetch(url)
			.then(respuesta => respuesta.json())
			.then(data => {
				setNombreServicio(data.nombreServicio);
				setIdUsrVende(data.idUsrVende);
				setNombreCategoria(data.setNombreCategoria);
				setFoto(data.foto);
				setTxCredenciales(data.txCredenciales);
				setFePublicacion(data.fePublicacion);
				setStatusServicio(data.statusServicio);
				palabrasClave(data.palabrasClave);
				setDescripcion(data.descripcion);
			});
	};

	useEffect(() => {
		let currentServicio = queryString.parse(location.search).id;

		if (currentServicio !== null && currentServicio !== undefined) getCurrentServicio(currentServicio);
	}, []);

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

	const handleChange = event => {
		setInDomicilio({ ...inDomicilio, [event.target.name]: event.target.checked });
	};

	return (
		<div className="container text-center my-5 ">
			<Modal open={open} handleClose={handleClose} message={message} />
			<Container>
				<ValidatorForm noValidate autoComplete="off" onSubmit={enviarDatos}>
					<div ClassName="row">
						<div ClassName="col">
							<h1>Formulario de Registro de Servicios</h1>
						</div>
					</div>
					<div className="bg-light pt-5 pb-5">
						<div className="forms row col-12 ">
							<div className="col-6">
								<a>Nombre Servicio</a>
							</div>
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
							<div className="col-6">
								<a>Nombre Categoria</a>
							</div>
							<div className="col-6 mb-3">
								<TextValidator
									fullWidth
									margin="normal"
									label="Nombre Categoria"
									id="outlined-size-normal"
									variant="outlined"
									value={nombreCategoria}
									onChange={event => setNombreCategoria(event.target.value)}
									validators={["required"]}
									errorMessages={["this field is required"]}
									helperText="Hogar, Diseño, Arquitectura, Ingenieria, Academia, Asistencia Virtual"
								/>
							</div>
						</div>

						<div className="forms row col-12">
							<div className="col-6">
								<a>Descripcion</a>
							</div>
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
									helperText="Breve reseña"
									errorMessages={["this field is required"]}
								/>
							</div>
						</div>

						<div className="forms row col-12">
							<div className="col-6">
								<a>Palabras claves</a>
							</div>
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
							<div className="col-6">
								<a>En domicilio</a>
							</div>
							<div className="col-6 mb-3">
								<FormGroup row>
									<FormControlLabel
										control={
											<Checkbox
												checked={inDomicilio.checkedB}
												onChange={handleChange}
												name="checkedB"
												color="primary"
											/>
										}
										label="Sí"
									/>
									<FormControlLabel
										control={
											<Checkbox
												checked={inDomicilio.checkedA}
												onChange={handleChange}
												name="checkedA"
												color="primary"
											/>
										}
										label="No"
									/>
								</FormGroup>
							</div>
						</div>

						<div className="forms row col-12">
							<div className="col-6">
								<a>Fecha de Publicación</a>
							</div>
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
							<div className="col-6">
								<a>Estado de servicio</a>
							</div>

							<div className="col-6 mb-3">
								<TextValidator
									fullWidth
									margin="normal"
									label="Estado de servicio"
									id="outlined-size-normal"
									type="text"
									variant="outlined"
									value={statusServicio}
									onChange={event => setStatusServicio(event.target.value)}
									validators={["required"]}
									errorMessages={["this field is required"]}
									helperText=" 1- Activo 2- inactivo...."
								/>
							</div>
						</div>

						<div className="forms row col-12">
							<div className="col-6">
								<a>Credenciales</a>
							</div>
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
							<div className="col-6">
								<a>Image</a>
							</div>
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
