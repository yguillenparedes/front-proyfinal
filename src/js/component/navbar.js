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
				<div className="navbar-brand ms-3 mb-0 h1">P.A.H (Proffesionals At Home)</div>
			</Link>
			<Grid borderRadius={20} container justify="center" xs={2} className="m-1">
				<TextField id="outlined-basic" label="Search" variant="outlined" />
			</Grid>
			<div className="ml-auto">
				<ThemeProvider theme={theme}>
					<ButtonGroup variant="text" color="primary" aria-label="text primary button group">
						<Link to="/categories/">
							<Button>Categories</Button>
						</Link>
						<Link to="/profile">
							<Button>Profile</Button>
						</Link>
						<Link to="/registro">
							<Button>Sign up</Button>
						</Link>
						<Button>Log in</Button>
					</ButtonGroup>
				</ThemeProvider>
			</div>
		</nav>
	);
};
