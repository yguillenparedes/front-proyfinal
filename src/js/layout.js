import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Home } from "./views/home";
import { Professionals } from "./views/Professionals";
import { Categories } from "./views/Categories";
import { Login } from "./component/Login";
import injectContext from "./store/appContext";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { FormularioUsuario } from "./component/FormularioUsuario";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/professionals">
							<Professionals />
						</Route>
						<Route exact path="/categories">
							<Categories />
						</Route>
						<Route exact path="/registro">
							<FormularioUsuario />
						</Route>
						<Route exact path="/login">
							<Login />
						</Route>
						<Route>
							<h1 className="p-3">Inicia sesión para ver tu perfil!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
