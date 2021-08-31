import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
export const Usuario = () => (
	<div>
		<Container component="main" maxWidth="xs">
			<Typography component="h1" variant="h5">
				Iniciar Sesión
			</Typography>
			<form>
				<TextField
					variant="outlined"
					margin="normal"
					required
					fullWidth
					id="email"
					label="Correo Electronico"
					name="email"
					autoComplete="email"
					autoFocus
				/>

				<TextField
					variant="outlined"
					margin="normal"
					required
					fullWidth
					name="password"
					label="Contraseña"
					type="password"
					id="password"
					autoComplete="current-password"
				/>

				<Button type="submit" fullWidth variant="contained" color="primary">
					Registrar
				</Button>
				<Grid container>
					<Grid item xs>
						<Link href="#" variant="body2">
							¿Olvidaste la contraseña?
						</Link>
					</Grid>

					<Grid item>
						<Link href="#" variant="body2">
							¿No tienes cuenta?
						</Link>
					</Grid>
				</Grid>
			</form>
		</Container>

		
	</div>
);