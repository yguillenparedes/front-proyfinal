import React from "react";
import TextField from "@material-ui/core/TextField";
import "../../styles/home.scss";

export const Home = () => (
	<div>
		<div className="text-center mt-5">
			<h1>Formulario de Registro de Servicio</h1>
		</div>
		<div className="column">
			<a>
				<p>Nombre de empresa</p>
			</a>
		</div>
		<div className="column">
			<TextField id="filled-basic" label="Filled" variant="filled" />
		</div>
	</div>
);
