import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import "../../styles/home.scss";

export const formularioServicio = () => (
	<div className="container text-center mt-5 mb-5">
		<div ClassName="row">
			<div ClassName="col">
				<h1>Formulario de Registro de Servicio</h1>
			</div>
		</div>
		<div className="forms row col-12">
			<div className="col-6">
				<a>Nombre de empresa</a>
			</div>
			<div className="col-6">
				<TextField label="" id="outlined-size-normal" defaultValue="" variant="outlined" />
			</div>
		</div>

		<div className="forms row col-12">
			<div className="col-6">
				<a>Categoria de servicio</a>
			</div>
			<div className="col-6">
				<TextField
					id="outlined-select-currency"
					select
					label="Category"
					helperText="Please select your category"
					variant="outlined">
					<MenuItem />
				</TextField>
			</div>
		</div>

		<div className="forms row col-12">
			<div className="col-6">
				<a>Descripcion de servicio</a>
			</div>
			<div className="col-6">
				<TextField label="" id="outlined-size-normal" defaultValue="" variant="outlined" />
			</div>
		</div>

		<div className="forms row col-12">
			<div className="col-6">
				<a>Tipo de servicio</a>
			</div>
			<div className="col-6">
				<TextField
					id="outlined-select-currency"
					select
					label="type of Service"
					helperText="Please select your type of service"
					variant="outlined">
					<MenuItem />
				</TextField>
			</div>
		</div>

		<div className="forms row col-12">
			<div className="col-6">
				<a>Estado</a>
			</div>
			<div className="col-6">
				<TextField
					id="outlined-select-currency"
					select
					label="State"
					helperText="Please select your State"
					variant="outlined">
					<MenuItem />
				</TextField>
			</div>
		</div>

		<div className="forms row col-12">
			<div className="col-6">
				<a>Ciudad</a>
			</div>
			<div className="col-6">
				<TextField
					id="outlined-select-currency"
					select
					label="City"
					helperText="Please select your city"
					variant="outlined">
					<MenuItem />
				</TextField>
			</div>
		</div>

		<div className="register">
			<Button variant="outlined" color="success">
				Registrar Servicio
			</Button>
		</div>
	</div>
);
