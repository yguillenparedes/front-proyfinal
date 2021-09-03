import React from "react";
import "../../styles/footer.scss";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

export const Footer = () => (
	<>
		<section
			style={{
				boxShadow:
					"0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)"
			}}>
			<Grid container item xs={12} style={{ backgroundColor: "rgba(23, 165, 151, 0.768)", padding: 20 }}>
				<Grid container item xs={6} justifyContent="center" alignItems="center">
					<Typography variant="h6" style={{ color: "white" }}>
						<p>P.A.H (Proffesionals At Home)</p>
					</Typography>
				</Grid>
				<Grid container item xs={6} justifyContent="center" alignItems="center">
					<Typography variant="h6" style={{ color: "white" }}>
						<p>
							Made with <i className="fa fa-heart text-danger" /> by A.D.J.Y
						</p>
					</Typography>
				</Grid>
			</Grid>
		</section>
		<footer style={{ backgroundColor: "black", padding: 10 }}>
			<Grid container item xs={12} justifyContent="center" alignItems="center">
				<Typography variant="subtitle" style={{ color: "white" }}>
					© 2021 Todos los derechos reservados
				</Typography>
			</Grid>
		</footer>
	</>
);
