import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Home } from "./views/home";
import { Professionals } from "./views/Professionals";
import { FormularioUsuario } from "./component/FormularioUsuario";
import { Categories } from "./views/Categories";
import { Login } from "./component/Login";
import injectContext from "./store/appContext";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import Routes from "./Routes";

const Layout = () => {
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
					<Routes />
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
