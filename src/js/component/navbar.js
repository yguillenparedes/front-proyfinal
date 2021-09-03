import React, { useContext } from "react";
import "../../styles/navbar.scss";
import { Link } from "react-router-dom";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { Context } from "../store/appContext";

const theme = createTheme({
	palette: {
		primary: {
			main: "#fafafa"
		},
		secondary: {
			main: "#fafafa"
		}
	}
});

export const Navbar = () => {
	const { store } = useContext(Context);
	const { currentUser } = store;

	const isEmpty = () => {
		return currentUser === null;
	};

	const logOut = () => {
		localStorage.removeItem("currentUser");
		location.reload();
	};

	const goToLogin = () => {
		window.location.replace("/login");
	};

	return (
		<nav className="navbar mb-3">
			<div className="ms-3">
				<Link to="/">
					<div className="navbar-brand ms-3 mb-0 h1 text-dark">P.A.H (Proffesionals At Home)</div>
				</Link>
			</div>
			<div className="ml-auto me-3 ">
				<ThemeProvider theme={theme}>
					<ButtonGroup variant="text" color="light" aria-label="text primary button group">
						{!isEmpty() && (
							<>
								<Link to="/categories/">
									<Button>Categories</Button>
								</Link>

								<Link to="/perfil">
									<Button>Profile</Button>
								</Link>
							</>
						)}
						{isEmpty() && (
							<Link to="/registro">
								<Button>Sign up</Button>
							</Link>
						)}

						<Button onClick={isEmpty() ? goToLogin : logOut}>{isEmpty() ? "Log in" : "Log out"}</Button>
					</ButtonGroup>
				</ThemeProvider>
			</div>
		</nav>
	);
};
