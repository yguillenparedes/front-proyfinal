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

const USUARIO_ID = "USUARIO_ID";
const urlUsuarios = "http://127.0.0.1:5000/usuarios";
const urlContact = `${urlUsuarios}${USUARIO_ID}`;

const MESSAGE_ERROR = {
	title: "Tienes un problema",
	description: `Tu correo está siendo usado`
};

const MESSAGE_SUCCESS = {
	title: "Correcto!",
	description: `Has sido registrado con éxito!`
};

const MESSAGE_SUCCESS_EDIT = {
	title: "Correcto!",
	description: `Tu Usuario fue modificado!`
};
const useStyles = makeStyles(theme => ({
	root: {
		display: "flex",
		flexWrap: "wrap"
	},
	textField: {
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1),
		width: "25ch"
	}
}));

export const FormularioUsuario = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [edad, setEdad] = useState("");
	const [phone, setPhone] = useState("");
	const [cedula, setCedula] = useState("");
	const [txCredenciales, setTxCredenciales] = useState("");
	const [claveUsr, setClaveUsr] = useState("");
	const [logUsr, setLogUsr] = useState("");
	const [feRegistro, setFeRegistro] = useState("");
	const [foto, setFoto] = useState("");
	const [direccion, setDireccion] = useState("");

	const [open, setOpen] = React.useState(false);
	const { actions } = useContext(Context);
	const [message, setMessage] = useState({});

	const handleClose = () => {
		setOpen(false);
	};

	const enviarDatos = () => {
		let currentUsuarioid = queryString.parse(location.search).id;
		const payload = {
			nombreUsr: name,
			correoUsr: email,
			edad: edad,
			numPhone: phone,
			cedula: cedula,
			txCredenciales: txCredenciales,
			claveUsr: claveUsr,
			logUsr: logUsr,
			feRegistro: feRegistro,
			foto: foto,
			idPlan: 1,
			rankVendedor: 1,
			rankComprador: 1,
			idMunicipio: 1,
			direccion: direccion
		};

		if (currentUsuarioid === null || currentUsuarioid === undefined) actions.fetchNewUsuario(payload, exito, error);
		else actions.fetchEditContact(payload, currentUsuarioid, exitoEditUsuario, error);
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

	const getCurrentUsuario = currentUsuarioid => {
		const url = urlContact.replace(USUARIO_ID, currentUsuarioid);
		fetch(url)
			.then(respuesta => respuesta.json())
			.then(data => {
				setName(data.nombreUsr);
				setEmail(data.correoUsr);
				setAddress(data.address);
				setPhone(data.numPhone);
				setCedula(data.cedula);
				setFoto(data.foto);
				setTxCredenciales(data.txCredenciales);
				setLogUsr(data.logUsr);
				setFeRegistro(data.feRegistro);
				setClaveUsr(data.claveUsr);
				setEdad(data.edad);
				setDireccion(data.direccion);
			});
	};

	useEffect(() => {
		let currentUsuarioid = queryString.parse(location.search).id;

		if (currentUsuarioid !== null && currentUsuarioid !== undefined) getCurrentUsuario(currentUsuarioid);
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

	return (
		<div className="container text-center my-5 ">
			<Modal open={open} handleClose={handleClose} message={message} />
			<Container>
				<ValidatorForm noValidate autoComplete="off" onSubmit={enviarDatos}>
					<div ClassName="row">
						<div ClassName="col">
							<h1>Formulario de Registro de Usuario</h1>
						</div>
					</div>
					<div className="bg-light pt-5 pb-5">
						<div className="forms row col-12 ">
							<div className="col-6">
								<a>Nombre Completo</a>
							</div>
							<div className="col-6 mb-3">
								<TextValidator
									fullWidth
									margin="normal"
									label="Nombre y apellido"
									id="outlined-size-normal"
									variant="outlined"
									value={name}
									onChange={event => setName(event.target.value)}
									validators={["required"]}
									errorMessages={["this field is required"]}
								/>
							</div>
						</div>

						<div className="forms row col-12">
							<div className="col-6">
								<a>Nombre de Usuario</a>
							</div>
							<div className="col-6 mb-3">
								<TextValidator
									fullWidth
									margin="normal"
									label="Nombre de Usuario"
									id="outlined-size-normal"
									type="text"
									variant="outlined"
									value={logUsr}
									onChange={event => setLogUsr(event.target.value)}
									validators={["required"]}
									errorMessages={["this field is required"]}
									helperText="Valor unico para cada usuario"
								/>
							</div>
						</div>

						<div className="forms row col-12">
							<div className="col-6">
								<a>Clave de Usuario</a>
							</div>
							<div className="col-6 mb-3">
								<TextValidator
									fullWidth
									margin="normal"
									label="Clave Secreta"
									id="outlined-size-normal"
									type="password"
									variant="outlined"
									value={claveUsr}
									onChange={event => setClaveUsr(event.target.value)}
									validators={["required"]}
									errorMessages={["this field is required"]}
								/>
							</div>
						</div>

						<div className="forms row col-12">
							<div className="col-6">
								<a>Email</a>
							</div>
							<div className="col-6 mb-3">
								<TextValidator
									fullWidth
									margin="normal"
									label="Email"
									id="outlined-size-normal"
									variant="outlined"
									value={email}
									onChange={event => setEmail(event.target.value)}
									validators={["required"]}
									errorMessages={["this field is required"]}
									helperText="xxxxxx@xxxx.com"
								/>
							</div>
						</div>

						<div className="forms row col-12">
							<div className="col-6">
								<a>Direccion</a>
							</div>
							<div className="col-6 mb-3">
								<TextValidator
									fullWidth
									margin="normal"
									label="Direccion"
									id="outlined-size-normal"
									variant="outlined"
									value={direccion}
									onChange={event => setDireccion(event.target.value)}
									validators={["required"]}
									helperText="Estado,Pais"
									errorMessages={["this field is required"]}
								/>
							</div>
						</div>

						<div className="forms row col-12">
							<div className="col-6">
								<a>Cédula</a>
							</div>
							<div className="col-6 mb-3">
								<TextValidator
									fullWidth
									margin="normal"
									label="Cédula"
									id="outlined-size-normal"
									type="text"
									variant="outlined"
									value={cedula}
									onChange={event => setCedula(event.target.value)}
									validators={["required"]}
									errorMessages={["this field is required"]}
									helperText="V-xxxxxx"
								/>
							</div>
						</div>

						<div className="forms row col-12">
							<div className="col-6">
								<a>Edad</a>
							</div>
							<div className="col-6 mb-3">
								<TextValidator
									fullWidth
									margin="normal"
									label="Edad"
									id="outlined-size-normal"
									type="number"
									variant="outlined"
									defaultValue="18"
									InputProps={{ inputProps: { min: 18, max: 100 } }}
									value={edad}
									onChange={event => setEdad(event.target.value)}
									validators={["required"]}
									errorMessages={["this field is required"]}
								/>
							</div>
						</div>

						<div className="forms row col-12">
							<div className="col-6">
								<a>Fecha de Nacimiento</a>
							</div>
							<div className="col-6 mb-3">
								<TextValidator
									fullWidth
									margin="normal"
									id="outlined-size-normal"
									type="date"
									variant="outlined"
									defaultValue="2017-05-24"
									value={feRegistro}
									onChange={event => setFeRegistro(event.target.value)}
									validators={["required"]}
									errorMessages={["this field is required"]}
								/>
							</div>
						</div>

						<div className="forms row col-12">
							<div className="col-6">
								<a>Telefono</a>
							</div>
							<div className="col-6 mb-3">
								<TextValidator
									fullWidth
									margin="normal"
									label="Telefono"
									id="outlined-size-normal"
									type="text"
									variant="outlined"
									value={phone}
									onChange={event => setPhone(event.target.value)}
									validators={["required"]}
									errorMessages={["this field is required"]}
									helperText="0414-xxxxxxx"
								/>
							</div>
						</div>

						<div className="forms row col-12">
							<div className="col-6">
								<a>Area de trabajo</a>
							</div>
							<div className="col-6 mb-3">
								<TextValidator
									fullWidth
									margin="normal"
									label="Area de trabajo"
									id="outlined-size-normal"
									type="text"
									variant="outlined"
									value={txCredenciales}
									onChange={event => setTxCredenciales(event.target.value)}
									validators={["required"]}
									errorMessages={["this field is required"]}
									helperText="Hogar, Diseño, Arquitectura, Ingenieria, Academia, Asistencia Virtual"
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
