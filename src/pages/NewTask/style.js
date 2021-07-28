import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		flex: 0,
		alignItems: "center",
		justifyContent: "center",
	},
	Information: {
		width: "90%",
		height: "90%",
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 20,
	},
	label: {
		width: "90%",
		marginTop: 50,
		marginLeft: 20,
		fontSize: 16,
		color: "#ff0000",
		fontWeight: "bold",
	},
	textInput: {
		width: "90%",
		marginTop: 10,
		padding: 10,
		height: 50,
		borderBottomWidth: 1,
		marginLeft: 20,
		borderBottomColor: "#ff0000",
		marginRight: "auto",
		marginLeft: "auto",
		marginBottom: 20,
	},
	buttonNew: {
		width: 200,
		height: 50,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#ff0000",
		marginTop: 30,
		borderRadius: 10,
	},
	iconSave: {
		color: "#fff",
		fontSize: 18,
		fontWeight: "bold",
	},
});

export default styles;
