// prettier-ignore
import { Theme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import { withRoot } from "./withRoot";

function App() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			Hello world.
		</div>
	);
}

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		width: "100%",
		height: "100%",
		zIndex: 1,
		overflow: "hidden",
	},
}));

export default withRoot(App);
