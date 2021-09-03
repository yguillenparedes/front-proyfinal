import React, { useContext } from "react";
import "../../styles/navbar.scss";
import { Link } from "react-router-dom";
import { createTheme } from "@material-ui/core/styles";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { Context } from "../store/appContext";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

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
		<>
			<AppBar position="static" style={{ backgroundColor: "rgba(23, 165, 151, 0.768)" }}>
				<Toolbar>
					<Link to="/" style={{ textDecoration: "none" }}>
						<Typography variant="h6" style={{ color: "white" }}>
							P.A.H (Proffesionals At Home)
						</Typography>
					</Link>
					<div style={{ flexGrow: 1 }} />
					<ButtonGroup variant="text" color="light" aria-label="text primary button group">
						{!isEmpty() && (
							<>
								<Link to="/categories/" style={{ textDecoration: "none" }}>
									<Button>
										<Typography variant="subtitle" style={{ color: "white" }}>
											Categories
										</Typography>
									</Button>
								</Link>

								<Link to="/perfil" style={{ textDecoration: "none" }}>
									<Button>
										<Typography variant="subtitle" style={{ color: "white" }}>
											Profile
										</Typography>
									</Button>
								</Link>
							</>
						)}
						{isEmpty() && (
							<Link to="/registro" style={{ textDecoration: "none" }}>
								<Button>
									<Typography variant="subtitle" style={{ color: "white" }}>
										Sign up
									</Typography>
								</Button>
							</Link>
						)}

						<Button onClick={isEmpty() ? goToLogin : logOut}>
							<Typography variant="subtitle" style={{ color: "white" }}>
								{isEmpty() ? "Log in" : "Log out"}
							</Typography>
						</Button>
					</ButtonGroup>
				</Toolbar>
			</AppBar>
		</>
	);
};
