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
import styles from "./style";

export default function NewTask({ navigation, route }) {
	const [description, setDescription] = useState(null);
	const [valor, setValor] = useState(null);
	const [quantit, setQuantit] = useState(null);

	const database = firebase.firestore();

	function addTask() {
		database.collection(route.params.idUser).add({
			description: description,
			value: valor,
			quantit: quantit,
			status: false,
		});
		navigation.navigate("Task");
	}

	return (
		<Pressable onPress={Keyboard.dismiss} style={styles.container}>
			<Text style={styles.label}>Nome</Text>
			<TextInput
				style={styles.textInput}
				placeholder="Ex: Estudar"
				onChangeText={setDescription}
				value={description}
			/>
			<Text style={styles.label}>Valor</Text>
			<TextInput
				style={styles.textInput}
				placeholder="Ex: Estudar"
				onChangeText={setValor}
				value={valor}
			/>

			<Text style={styles.label}>Quantidade</Text>
			<TextInput
				style={styles.textInput}
				placeholder="Ex: Estudar"
				onChangeText={setQuantit}
				value={description}
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
