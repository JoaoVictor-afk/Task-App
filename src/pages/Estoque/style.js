import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 20,
	},
	Tasks: {
		width: "100%",
		flexDirection: "row",
		justifyContent: "space-between",
		marginTop: 5,
		borderBottomWidth: 1,
		borderBottomColor: "#b5b5b5",
	},
	deleteTouch: {
		justifyContent: "center",
		paddingLeft: 10,
	},
	descriptionTask: {
		width: "95%",
		alignContent: "flex-end",
		backgroundColor: "#fff",
		padding: 15,
		paddingHorizontal: 20,
		borderRadius: 10,
		marginBottom: 5,
		marginRight: 15,
		color: "#000",
		borderBottomWidth: 2,
		borderBottomColor: "#f92E6a",
	},
	touch: {
		position: "absolute",
		width: 80,
		height: 80,
		bottom: 30,
		left: 20,
		backgroundColor: "red",
		borderRadius: 50,
		justifyContent: "center",
		alignItems: "center",
	},
	iconTouch: {
		color: "#fff",
		fontSize: 30,
		fontWeight: "bold",
	},
	buttonLogout: {
		position: "absolute",
		width: 80,
		height: 80,
		bottom: 30,
		right: 20,
		justifyContent: "center",
		alignItems: "center",
	},
	iconLogout: {
		color: "#fff",
		fontSize: 40,
		fontWeight: "bold",
	},
});

export default styles;
