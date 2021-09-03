import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const NotAccess = props => {
	const { store } = useContext(Context);
	const { currentUser } = store;
	if (currentUser === null) {
		return (
			<div>
				<div className="container text-primary py-5  mb-5 rounded-start text-center bg-light m-5">
					<h2 className=""> Por favor inicie sesion para continuar</h2>
				</div>
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
			</div>
		);
	} else {
		return props.children;
	}
};
