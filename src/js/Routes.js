import React from "react";
import { Route, Switch } from "react-router-dom";
import { Home } from "./views/home";
import { Professionals } from "./views/Professionals";
import { Categories } from "./views/Categories";
import { Login } from "./component/Login";
import { Usuario } from "./component/Usuario";
import { FormularioUsuario } from "./component/FormularioUsuario";
import { NotAccess } from "./views/NotAccess";

const Routes = () => {
	return (
		<Switch>
			<Route exact path="/">
				<Home />
			</Route>
			<Route exact path="/professionals">
				<NotAccess>
					<Professionals />
				</NotAccess>
			</Route>
			<Route exact path="/categories">
				<NotAccess>
					<Categories />
				</NotAccess>
			</Route>
			<Route exact path="/registro">
				<FormularioUsuario />
			</Route>
			<Route exact path="/login">
				<Login />
			</Route>
			<Route exact path="/perfil">
				<NotAccess>
					<Usuario />
				</NotAccess>
			</Route>
			<Route>
				<h1 className="p-3">Pagina no encontrada</h1>
			</Route>
		</Switch>
	);
};

export default Routes;
