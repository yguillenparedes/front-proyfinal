import React, { useContext } from "react";
import Card from "../component/card";
import { Context } from "../store/appContext";

export const Professionals = props => {
	const { store } = useContext(Context);

	return (
		<div className="container text-primary p-5">
			<h2 className="mb-5 p-3 bg-light text-center">Nuestros profesionales</h2>
			<div>
				{store.usuarios.map((usuario, index) => {
					return (
						<div key={`usuario-card-${index}`}>
							<Card element={usuario} isUsuarios />
						</div>
					);
				})}
			</div>
		</div>
	);
};
