import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import firebase from "../../config/firebase";
import styles from "../NewTask/style";

export default function Details({ navigation, route }) {
	const [descriptionEdit, setDescriptionEdit] = useState(
		route.params.description
	);
	const database = firebase.firestore();
	const idTask = route.params.id;

	function editTask(description, id) {
		database.collection(route.params.idUser).doc(id).update({
			description: description,
		});
		navigation.navigate("Task");
	}

	return (
		<View style={styles.container}>
			<Text style={styles.label}>Descrição</Text>
			<TextInput
				style={styles.textInput}
				placeholder="Ex: Estudar"
				onChangeText={setDescriptionEdit}
				value={descriptionEdit}
			/>
			<TouchableOpacity
				style={styles.buttonNew}
				onPress={() => {
					editTask(descriptionEdit, idTask);
				}}
			>
				<Text style={styles.iconSave}>Save</Text>
			</TouchableOpacity>
		</View>
	);
}
