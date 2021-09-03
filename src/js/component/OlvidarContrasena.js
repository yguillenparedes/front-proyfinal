import React, { Component } from "react";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

export const Olvidarcontrasena = () => (
	<div className="container text-center my-5 ">
		<Container>
			<ValidatorForm>
				<div ClassName="row">
					<div ClassName="col">
						<h1 className="mb-5">¿Olvidaste la contraseña?</h1>
					</div>
				</div>
				<div className="bg-light pt-5 pb-5">
					<div className="forms row col-12 ">
						<div className="col-6">
							<a>Usuario</a>
						</div>
						<div className="col-6 mb-3">
							<TextValidator
								fullWidth
								margin="normal"
								label="Usuario"
								id="outlined-size-normal"
								variant="outlined"
								validators={["required"]}
								errorMessages={["this field is required"]}
							/>
						</div>
					</div>
					<div className="forms row col-12">
						<div className="col-6">
							<a>Correo Electrónico</a>
						</div>
						<div className="col-6 mb-3">
							<TextValidator
								fullWidth
								margin="normal"
								label="Correo Electrónico"
								id="outlined-size-normal"
								type="text"
								variant="outlined"
								validators={["required"]}
								errorMessages={["this field is required"]}
							/>
						</div>
					</div>

					<div className="forms row col-12">
						<div className="col-6">
							<a>Teléfono</a>
						</div>
						<div className="col-6 mb-3">
							<TextValidator
								fullWidth
								margin="normal"
								label="Teléfono"
								id="outlined-size-normal"
								type="text"
								variant="outlined"
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
