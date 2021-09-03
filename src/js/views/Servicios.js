import React, { useContext } from "react";
import CardServicios from "../component/CardServicios";
import { Context } from "../store/appContext";

export const Servicios = props => {
	const { store } = useContext(Context);

	return (
		<div className="container text-primary p-5">
			<h2 className="mb-5 p-3 bg-light text-center">Nuestros servicios Activos En Esta Categoría</h2>
			<div>
				{store.servicios.map((servicios, index) => {
					return (
						<div key={`servicios-card-${index}`}>
							<CardServicios element={servicios} />
						</div>
					);
				})}
			</div>
		</div>
	);
};
