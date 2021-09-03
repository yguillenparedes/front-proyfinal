import React, { useContext, useEffect } from "react";
import CardServicios from "../component/CardServicios";
import { Context } from "../store/appContext";
import queryString from "query-string";
import Typography from "@material-ui/core/Typography";

export const Servicios = props => {
	const { store, actions } = useContext(Context);

	const getServiciosByCategory = () => {
		let categoryId = queryString.parse(location.search).id;
		actions.getServiciosIDCategoria(categoryId);
	};

	useEffect(() => {
		getServiciosByCategory();
	}, []);

	if (store.serviciosCategoria.length === 0) {
		return (
			<div className="container text-primary p-5">
				<h2 className="mb-5 p-3 bg-light text-center">No hay servicios disponibles</h2>
			</div>
		);
	} else {
		return (
			<div className="container text-primary p-5">
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
						Nuestros servicios activos en esta categoría
					</Typography>
				</div>

				<div>
					{store.serviciosCategoria.map((servicios, index) => {
						return (
							<div key={`servicios-card-${index}`}>
								<CardServicios element={servicios} />
							</div>
						);
					})}
				</div>
			</div>
		);
	}
};
