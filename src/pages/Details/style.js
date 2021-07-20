import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	label: {
		width: "90%",
		marginTop: 20,
		marginLeft: 20,
		fontSize: 16,
		color: "#f92e6a",
		fontWeight: "bold",
	},
	textInput: {
		width: "90%",
		marginTop: 20,
		padding: 10,
		height: 50,
		borderBottomWidth: 1,
		marginLeft: 20,
		borderBottomColor: "#f92e6a",
		backgroundColor: "#f5f5f5",
		borderRadius: 10,
		marginRight: "auto",
		marginLeft: "auto",
	},
	buttonNew: {
		position: "absolute",
		width: 60,
		height: 60,
		bottom: 30,
		left: 20,
		backgroundColor: "#f92e6a",
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
