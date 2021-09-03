import React, { useState } from "react";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

const ULR_BASE = "http://127.0.0.1:5000/restaurar";

export const OlvidarContrasena = () => {
	const [userName, setUserName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");

	const enviarDatos = async () => {
		const payload = {
			logUsr: userName,
			correoUsr: email,
			numPhone: phone
		};

		await fetch(ULR_BASE, {
			method: "POST",
			body: JSON.stringify(payload),
			headers: {
				"Content-Type": "application/json"
			}
		}).then(function(response) {
			if (response.status === 200) {
				console.log(response);
			}
		});
	};

	return (
		<div className="container text-center my-5 ">
			<Container>
				<ValidatorForm noValidate autoComplete="off" onSubmit={enviarDatos}>
					<div ClassName="row">
						<div
							style={{
								boxShadow:
									"rgb(0 0 0 / 20%) 0px 2px 1px -1px, rgb(0 0 0 / 14%) 0px 1px 3px 0px, rgb(0 0 0 / 12%) 0px 1px 1px 0px",
								marginBottom: 50,
								backgroundColor: "rgba(23, 165, 151, 0.768)",
								borderRadius: 4
							}}>
							<Typography variant="h3" style={{ color: "white" }}>
								¿Olvidaste la contraseña?
							</Typography>
						</div>
					</div>
					<div className="bg-light pt-5 pb-5">
						<div className="forms row col-12 ">
							<Grid container item xs={6} justifyContent="center" alignItems="center">
								Usuario
							</Grid>
							<div className="col-6 mb-3">
								<TextValidator
									fullWidth
									margin="normal"
									label="Usuario"
									id="outlined-size-normal"
									variant="outlined"
									onChange={event => setUserName(event.target.value)}
									validators={["required"]}
									errorMessages={["this field is required"]}
									value={userName}
								/>
							</div>
						</div>
						<div className="forms row col-12">
							<Grid container item xs={6} justifyContent="center" alignItems="center">
								Correo Electrónico
							</Grid>
							<div className="col-6 mb-3">
								<TextValidator
									fullWidth
									margin="normal"
									label="Correo Electrónico"
									id="outlined-size-normal"
									type="text"
									variant="outlined"
									onChange={event => setEmail(event.target.value)}
									validators={["required", "isEmail"]}
									errorMessages={["this field is required", "Correo electronico invalido"]}
									value={email}
								/>
							</div>
						</div>

						<div className="forms row col-12">
							<Grid container item xs={6} justifyContent="center" alignItems="center">
								Teléfono
							</Grid>
							<div className="col-6 mb-3">
								<TextValidator
									fullWidth
									margin="normal"
									label="Teléfono"
									id="outlined-size-normal"
									type="text"
									variant="outlined"
									onChange={event => setPhone(event.target.value)}
									value={phone}
									validators={["required"]}
									errorMessages={["this field is required"]}
								/>
							</div>
						</div>
						<div className="register">
							<Grid container justifyContent="center" item xs={12}>
								<Button variant="contained" size="large" color="primary" type="submit">
									Enviar
								</Button>
							</Grid>
						</div>
					</div>
				</ValidatorForm>
			</Container>
		</div>
	);
};
