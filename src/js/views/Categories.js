import React, { useContext } from "react";
import CardCategories from "../component/CardCategories";
import { Context } from "../store/appContext";
import Grid from "@material-ui/core/Grid";

export const Categories = () => {
	const { store } = useContext(Context);
	const { currentUser } = store;

	return (
		<div className="container text-primary p-5 ">
			<h2 className="mb-5 bg-light p-3"> Estas son nuestras categorias</h2>
			<div>
				{store.categorias.map((categories, index) => {
					return (
						<div key={`categories-card-${index}`}>
							<CardCategories element={categories} isUsuarios />
						</div>
					);
				})}
			</div>
		</div>
	);
};
