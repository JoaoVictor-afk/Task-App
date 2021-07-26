import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	label: {
		width: "90%",
		marginTop: 20,
		marginLeft: 20,
		fontSize: 16,
		color: "#ff0000",
		fontWeight: "bold",
	},
	textInput: {
		width: "90%",
		marginTop: 20,
		padding: 10,
		height: 50,
		borderBottomWidth: 1,
		marginLeft: 20,
		borderBottomColor: "#ff0000",
		backgroundColor: "#f5f5f5",
		borderRadius: 10,
		marginRight: "auto",
		marginLeft: "auto",
		marginBottom: 20,
	},
	buttonNew: {
		position: "absolute",
		width: 60,
		height: 60,
		bottom: 30,
		left: 20,
		backgroundColor: "#ff0000",
		borderRadius: 50,
		justifyContent: "center",
		alignItems: "center",
	},
	iconSave: {
		color: "#fff",
		fontSize: 18,
		fontWeight: "bold",
	},
});

export default styles;
