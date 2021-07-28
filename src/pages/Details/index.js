import React, { useState } from "react";
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	Pressable,
	Keyboard,
} from "react-native";
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
			description: descriptionEdit,
			valor: valorEdit,
			quantit: quantitEdit,
		});
		navigation.navigate("Estoque");
	}

	return (
		<Pressable onPress={Keyboard.dismiss} style={styles.container}>
			<Text style={styles.label}>Nome</Text>
			<TextInput
				style={styles.textInput}
				placeholder="Ex: 200"
				placeholderTextColor="rgba(255, 0, 0,.60)"
				color="red"
				onChangeText={setDescriptionEdit}
				value={descriptionEdit}
			/>
			<Text style={styles.label}>Valor</Text>
			<TextInput
				style={styles.textInput}
				placeholder="Ex: 200"
				placeholderTextColor="rgba(255, 0, 0,.60)"
				color="red"
				onChangeText={setValorEdit}
				value={valorEdit}
			/>

			<Text style={styles.label}>Quantidade</Text>
			<TextInput
				style={styles.textInput}
				placeholder="Ex: 200"
				placeholderTextColor="rgba(255, 0, 0,.60)"
				color="red"
				onChangeText={setQuantitEdit}
				value={quantitEdit}
			/>

			<TouchableOpacity
				style={styles.buttonNew}
				onPress={() => {
					editTask();
				}}
			>
				<Text style={styles.iconSave}>Save</Text>
			</TouchableOpacity>
		</Pressable>
	);
}
