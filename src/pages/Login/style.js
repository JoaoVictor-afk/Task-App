import React from "react";
import {
	ImageBackground,
	Platform,
	StyleSheet,
	Text,
	View,
} from "react-native";

const styles = StyleSheet.create({
	container: {
		flex: 1,

		alignItems: "center",
		justifyContent: "center",
		paddingTop: Platform.OS === "ios" ? 0 : 50,
	},
	container1: {
		alignItems: "center",
		justifyContent: "center",
	},
	title: {
		fontSize: 48,
		color: "#ff0000",
		marginBottom: 50,
		fontWeight: "bold",
	},
	input: {
		width: 300,
		marginTop: 10,
		padding: 10,
		height: 50,
		borderBottomWidth: 1,
		borderBottomColor: "#ff0000",
		marginRight: "auto",
		marginLeft: "auto",
		color: "#4d5156",
		marginBottom: 10,
	},
	buttonLogin: {
		width: 200,
		height: 50,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#ff0000",
		marginTop: 30,
		borderRadius: 50,
	},
	textButton: {
		color: "#fff",
	},
	contentAlert: {
		marginTop: 10,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
	warningAlert: {
		paddingLeft: 10,
		color: "#bdbdbd",
		fontSize: 16,
	},
	registration: {
		marginTop: 20,
		color: "#4d5156",
	},
	links: {
		color: "#1877f2",
		fontSize: 16,
	},
});

export default styles;
