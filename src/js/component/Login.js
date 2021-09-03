import React, { useContext, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import "../../styles/login.scss";
import { Context } from "../store/appContext";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { Redirect } from "react-router-dom";

export const Login = () => {
	const { store, actions } = useContext(Context);
	const { currentUser } = store;
	const [userName, setUserName] = useState("");
	const [password, setPassword] = useState("");

	const login = async () => {
		const payload = {
			logUsr: userName,
			claveUsr: password
		};
		await actions.getCurrentUser(payload);
	};

	if (currentUser === null) {
		return (
			<div className="login mt-5 mb-5 pt-5 pb-5">
				<Container component="main" maxWidth="xs">
					<Typography component="h1" variant="h5" className="text-center">
						Iniciar Sesión
					</Typography>
					<ValidatorForm noValidate autoComplete="off" onSubmit={login}>
						<TextValidator
							variant="outlined"
							margin="normal"
							required
							fullWidth
							id="userName"
							label="Nombre de usuario"
							name="userName"
							autoFocus
							onChange={event => setUserName(event.target.value)}
							validators={["required"]}
							errorMessages={["this field is required"]}
							value={userName}
						/>

						<TextValidator
							variant="outlined"
							margin="normal"
							required
							fullWidth
							name="password"
							label="Contraseña"
							type="password"
							id="password"
							autoComplete="current-password"
							onChange={event => setPassword(event.target.value)}
							validators={["required"]}
							errorMessages={["this field is required"]}
							value={password}
						/>

						<Button type="submit" fullWidth variant="contained" color="light">
							Ingresar
						</Button>

						<Grid container>
							<Grid item xs>
								<Link href="/contrasenaolvidada" variant="body2">
									¿Olvidaste la contraseña?
								</Link>
							</Grid>

							<Grid item>
								<Link href="/registro" variant="body2">
									¿No tienes cuenta?
								</Link>
							</Grid>
						</Grid>
					</ValidatorForm>
				</Container>
				<br />
				<br />
			</div>
		);
	} else {
		return (
			<Redirect
				to={{
					pathname: "/"
				}}
			/>
		);
	}
};
