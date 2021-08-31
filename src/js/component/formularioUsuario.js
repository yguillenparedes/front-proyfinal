import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import "../../styles/home.scss";

export const PerfilUsuario = () => (
	<div className="container text-center mt-5">
		<div ClassName="row">
			<div ClassName="col">
				<h1>Formulario de Registro de Usuario</h1>
			</div>
		</div>
		<div className="forms row col-12">
			<div className="col-6">
				<a>Nombre</a>
			</div>
			<div className="col-6">
				<TextField label="Nombre" id="outlined-size-normal" variant="outlined" />
			</div>
		</div>

		<div className="forms row col-12">
			<div className="col-6">
				<a>Apellido</a>
			</div>
			<div className="col-6">
				<TextField label="Apellido" id="outlined-size-normal" variant="outlined" />
			</div>
		</div>

		<div className="forms row col-12">
			<div className="col-6">
				<a>Cédula</a>
			</div>
			<div className="col-6">
				<TextField label="Cédula" id="outlined-size-normal" type="number" variant="outlined" />
			</div>
		</div>

		<div className="forms row col-12">
			<div className="col-6">
				<a>Edad</a>
			</div>
			<div className="col-6">
				<TextField label="Edad" id="outlined-size-normal" type="number" variant="outlined" />
			</div>
		</div>

		<div className="forms row col-12">
			<div className="col-6">
				<a>Estado</a>
			</div>
			<div className="col-6">
				<TextField
					id="outlined-select-estado"
					select
					label="Select"
					helperText="Por favor, selecciona un estado"
					variant="outlined">
					<MenuItem />
				</TextField>
			</div>
		</div>

		<div className="forms row col-12">
			<div className="col-6">
				<a>Municipio</a>
			</div>
			<div className="col-6">
				<TextField
					id="outlined-select-currency"
					select
					label="Select"
					helperText="Por favor, selecciona un municipio"
					variant="outlined">
					<MenuItem />
				</TextField>
			</div>
		</div>

		<div className="register">
			<Button variant="outlined" color="primary">
				Registrar
			</Button>
		</div>
	</div>
);