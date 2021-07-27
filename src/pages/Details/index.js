import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import firebase from "../../config/firebase";
import styles from "../NewTask/style";

export default function Details({ navigation, route }) {
	const [descriptionEdit, setDescriptionEdit] = useState(
		route.params.description
	);
	const [valorEdit, setValorEdit] = useState(route.params.valor);
	const [quantitEdit, setQuantitEdit] = useState(route.params.quantit);

	const database = firebase.firestore();
	const idTask = route.params.id;

	function editTask(description, id) {
		database.collection(route.params.idUser).doc(id).update({
			description: description,
			value: valor,
			quantit: quantit,
		});
		navigation.navigate("Task");
	}

	return (
		<Pressable onPress={Keyboard.dismiss} style={styles.container}>
			<Text style={styles.label}>Nome</Text>
			<TextInput
				style={styles.textInput}
				placeholder="Ex: Estudar"
				onChangeText={setDescriptionEdit}
				value={descriptionEdit}
			/>
			<Text style={styles.label}>Valor</Text>
			<TextInput
				style={styles.textInput}
				placeholder="Ex: Estudar"
				onChangeText={setValorEdit}
				value={valorEdit}
			/>

			<Text style={styles.label}>Quantidade</Text>
			<TextInput
				style={styles.textInput}
				placeholder="Ex: Estudar"
				onChangeText={setQuantitEdit}
				value={quantitEdit}
			/>

			<TouchableOpacity
				style={styles.buttonNew}
				onPress={() => {
					addTask();
				}}
			>
				<Text style={styles.iconSave}>Save</Text>
			</TouchableOpacity>
		</Pressable>
	);
}
