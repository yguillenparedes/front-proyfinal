import React from "react";
import "../../styles/navbar.scss";
import { Link } from "react-router-dom";
import { createTheme, withStyles, makeStyles, ThemeProvider } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { white } from "@material-ui/core/colors";

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
	return (
		<nav className="navbar mb-3">
			<Link to="/">
				<div className="navbar-brand ms-5 mb-0 h1 dark">P.A.H (Proffesionals At Home)</div>
			</Link>
			<Grid borderRadius={20} container justify="center" xs={2} className="m-1" />
			<div className="links ml-auto me-3">
				<ThemeProvider theme={theme}>
					<ButtonGroup variant="text" color="secondary" aria-label="text light button group">
						<Link to="/categories/">
							<Button style={{ color: "white" }}>Categories</Button>
						</Link>
						<Link to="/profile">
							<Button style={{ color: "white" }}>Profile</Button>
						</Link>
						<Link to="/registro">
							<Button style={{ color: "white" }}>Sign up</Button>
						</Link>
						<Link to="/login/">
							<Button style={{ color: "white" }}>Log in</Button>
						</Link>
					</ButtonGroup>
				</ThemeProvider>
			</div>
		</nav>
	);
};
