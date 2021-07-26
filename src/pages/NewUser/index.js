import React, { useState, useEffect } from "react";
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	KeyboardAvoidingView,
	Platform,
	Pressable,
	Keyboard,
} from "react-native";
import firebase from "../../config/firebase";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import styles from "./style";

export default function NewUser({ navigation }) {
	const [email, setEmail] = useState("");
	const [senha, setSenha] = useState("");
	const [fullName, setName] = useState("");
	const [number, setNumber] = useState("");
	const [errorRegister, setErrorR] = useState("");
	const database = firebase.firestore();

	const register = () => {
		firebase
			.auth()
			.createUserWithEmailAndPassword(email, senha)
			.then((userCredential) => {
				var user = userCredential.user;
				database.collection("user").add({
					Email: email,
					Name: fullName,
					Number: number,
				});
				navigation.navigate("Task", { idUser: user.uid });
			})
			.catch((error) => {
				setErrorR(true);
				let errorCode = error.code;
				let errorMessage = error.message;
			});
	};

	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === "ios" ? "padding" : "height"}
			style={styles.container}
		>
			<Pressable onPress={Keyboard.dismiss} style={styles.container1}>
				<Text style={styles.title}>Criar Uma conta</Text>

				<TextInput
					style={styles.input}
					placeholder={"Nome Completo"}
					value={fullName}
					onChangeText={(text) => setName(text)}
					type="text"
					placeholderTextColor="rgba(255, 0, 0,.50)"
				/>
				<TextInput
					style={styles.input}
					placeholder={"Email"}
					value={email}
					onChangeText={(text) => setEmail(text)}
					type="text"
					placeholderTextColor="rgba(249, 46, 106,.50)"
				/>
				<TextInput
					style={styles.input}
					secureTextEntry={true}
					placeholder={"Coloque sua senha"}
					value={senha}
					onChangeText={(text) => setSenha(text)}
					type="text"
					placeholderTextColor="rgba(255, 0, 0,.50)"
				/>
				<TextInput
					style={styles.input}
					placeholder={"Numero Ex:(55)9999999"}
					value={number}
					onChangeText={(text) => setNumber(text)}
					type="text"
					placeholderTextColor="rgba(255, 0, 0,.50)"
				/>

				{errorRegister === true ? (
					<View style={styles.contentAlert}>
						<MaterialCommunityIcons
							name="alert-circle"
							size={24}
							color="rgba(255, 0, 0,.50)"
						/>
						<Text style={styles.warningAlert}>Informações invalidas</Text>
					</View>
				) : (
					<View />
				)}

				{email === "" || senha === "" ? (
					<TouchableOpacity disabled={true} style={styles.buttonRegist} onPress>
						<Text style={styles.textButton}>Registrar</Text>
					</TouchableOpacity>
				) : (
					<TouchableOpacity style={styles.buttonRegist} onPress={register}>
						<Text style={styles.textButton}>Registrar</Text>
					</TouchableOpacity>
				)}
				<Text style={styles.registration}>
					Já tem uma conta?
					<Text
						style={styles.link}
						onPress={() => navigation.navigate("Login")}
					>
						Volte pra tela de Login...
					</Text>
					<View style={{ height: 100 }} />
				</Text>
			</Pressable>
		</KeyboardAvoidingView>
	);
}
