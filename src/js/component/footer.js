import React, { Component } from "react";
import "../../styles/footer.scss";
import Grid from "@material-ui/core/Grid";

export const Footer = () => (
	<footer>
		<Grid container item xs={12} style={{ backgroundColor: "rgba(23, 165, 151, 0.768)", padding: 20 }}>
			<Grid container item xs={6} justifyContent="center" alignItems="center">
				<div className="h2">
					<p>P.A.H (Proffesionals At Home)</p>
				</div>
			</Grid>
			<Grid container item xs={6} justifyContent="center" alignItems="center">
				<div className="h2">
					<p>
						Made with <i className="fa fa-heart text-danger" /> by A.D.J.Y
					</p>
				</div>
			</Grid>
		</Grid>
	</footer>
);
