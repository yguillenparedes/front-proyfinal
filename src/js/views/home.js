import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import "../../styles/home.scss";

export const Home = () => (
	<div className="container text-center mt-5">
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
				<TextField label="Size" id="outlined-size-normal" defaultValue="Normal" variant="outlined" />
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
					label="Select"
					helperText="Please select your currency"
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
				<TextField label="Size" id="outlined-size-normal" defaultValue="Normal" variant="outlined" />
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
					label="Select"
					helperText="Please select your currency"
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
					label="Select"
					helperText="Please select your currency"
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
					label="Select"
					helperText="Please select your currency"
					variant="outlined">
					<MenuItem />
				</TextField>
			</div>
		</div>

		<div className="register">
			<Button variant="outlined" color="secondary">
				Secondary
			</Button>
		</div>
	</div>
);
