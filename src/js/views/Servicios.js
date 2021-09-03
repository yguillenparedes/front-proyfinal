import React, { useContext, useEffect } from "react";
import CardServicios from "../component/CardServicios";
import { Context } from "../store/appContext";
import queryString from "query-string";

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
				<h2 className="mb-5 p-3 bg-light text-center">Nuestros servicios activos en esta categoría</h2>
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
