import React, { useState } from "react";
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	Pressable,
	Keyboard,
	SafeAreaView,
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
			valor: valor,
			quantit: quantit,
			status: true,
		});
		navigation.navigate("Estoque");
	}

	return (
		<Pressable onPress={Keyboard.dismiss} style={styles.container}>
			<SafeAreaView style={styles.Information}>
				<Text style={styles.label}>Nome</Text>
				<TextInput
					style={styles.textInput}
					placeholder="Ex: Estudar"
					placeholderTextColor="rgba(255, 0, 0,.60)"
					color="red"
					onChangeText={setDescription}
					value={description}
				/>
				<Text style={styles.label}>Valor</Text>
				<TextInput
					style={styles.textInput}
					placeholder="Ex:580"
					placeholderTextColor="rgba(255, 0, 0,.60)"
					color="red"
					onChangeText={setValor}
					value={valor}
				/>

				<Text style={styles.label}>Quantidade</Text>
				<TextInput
					style={styles.textInput}
					placeholder="Ex: 200"
					placeholderTextColor="rgba(255, 0, 0,.60)"
					color="red"
					onChangeText={setQuantit}
					value={quantit}
				/>

				<TouchableOpacity
					style={styles.buttonNew}
					onPress={() => {
						addTask();
					}}
				>
					<Text style={styles.iconSave}>Save</Text>
				</TouchableOpacity>
			</SafeAreaView>
		</Pressable>
	);
}
