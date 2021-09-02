import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import PropTypes from "prop-types";

const useStyles = makeStyles(theme => ({
	modal: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center"
	},
	paper: {
		backgroundColor: theme.palette.background.paper,
		border: "2px solid #000",
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3)
	}
}));

const Modall = props => {
	const { open, handleClose, message } = props;

	const classes = useStyles();

	return (
		<div>
			<Modal
				aria-labelledby="transition-modal-title"
				aria-describedby="transition-modal-description"
				className={classes.modal}
				open={open}
				onClose={handleClose}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500
				}}>
				<Fade in={open}>
					<div className={classes.paper}>
						<h2 id="transition-modal-title">{message.title}</h2>
						<p id="transition-modal-description"> {message.description}</p>
					</div>
				</Fade>
			</Modal>
		</div>
	);
};

Modall.propTypes = {
	open: PropTypes.bool,
	handleClose: PropTypes.func,
	message: PropTypes.object
};
export default Modall;
