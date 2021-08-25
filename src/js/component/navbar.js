import React from "react";
import { Link } from "react-router-dom";
import { createTheme, withStyles, makeStyles, ThemeProvider } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { blue } from "@material-ui/core/colors";

const theme = createTheme({
	palette: {
		primary: blue
	}
});

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">P.A.H (Proffesionals At Home)</span>
			</Link>
			<Grid borderRadius={20} container justify="center" xs={6}>
				<TextField id="outlined-basic" label="Search" variant="outlined" />
			</Grid>
			<div className="ml-auto">
				<Link to="/AddNewContact">
					<ThemeProvider theme={theme}>
						<ButtonGroup variant="text" color="primary" aria-label="text primary button group">
							<Button>Company</Button>
							<Button>Services</Button>
							<Button>Log in</Button>
							<Button>Sign up</Button>
						</ButtonGroup>
					</ThemeProvider>
				</Link>
			</div>
		</nav>
	);
};
