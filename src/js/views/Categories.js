import React, { useContext } from "react";
import CardCategories from "../component/CardCategories";
import { Context } from "../store/appContext";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

export const Categories = () => {
	const { store } = useContext(Context);
	const { currentUser } = store;

	return (
		<div className="container text-primary p-5 ">
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
					Estas son nuestras categorias
				</Typography>
			</div>

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
