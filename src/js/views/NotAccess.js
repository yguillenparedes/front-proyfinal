import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const NotAccess = props => {
	const { store } = useContext(Context);
	const { currentUser } = store;
	if (currentUser === null) {
		return (
			<div className="container text-primary p-5">
				<h2 className="mb-5"> Inicie session</h2>
			</div>
		);
	} else {
		return props.children;
	}
};
