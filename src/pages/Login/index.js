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

export default function Login({ navigation }) {
	const [email, setEmail] = useState("");
	const [senha, setSenha] = useState("");
	const [errorLogin, setError] = useState("");
	const [errorNumber, setErrorNumber] = useState("");

	const loginFirebase = () => {
		firebase
			.auth()
			.signInWithEmailAndPassword(email, senha)
			.then((userCredential) => {
				// Signed in
				var user = userCredential.user;
				navigation.navigate("Estoque", { idUser: user.uid });
			})
			.catch((error) => {
				setError(true);
				let errorCode = error.code;
				let errorMessage = error.message;
			});
	};

	useEffect(() => {
		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				navigation.navigate("Estoque", { idUser: user.uid });
			}
		});
	}, []);

	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === "ios" ? "padding" : "height"}
			style={styles.container}
		>
			<Pressable onPress={Keyboard.dismiss} style={styles.container1}>
				<Text style={styles.title}>Estoque</Text>

				<TextInput
					style={styles.input}
					placeholder={"Coloque seu Email"}
					value={email}
					onChangeText={(text) => setEmail(text)}
					type="text"
					placeholderTextColor="rgba(255, 0, 0,.50)"
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

				{errorLogin === true ? (
					<View style={styles.contentAlert}>
						<MaterialCommunityIcons
							name="alert-circle"
							size={24}
							color="#bdbdbd"
						/>
						<Text style={styles.warningAlert}>E-mail ou Senha Incorreto</Text>
					</View>
				) : (
					<View />
				)}

				{email === "" || senha === "" ? (
					<TouchableOpacity disabled={true} style={styles.buttonLogin} onPress>
						<Text style={styles.textButton}>Login</Text>
					</TouchableOpacity>
				) : (
					<TouchableOpacity style={styles.buttonLogin} onPress={loginFirebase}>
						<Text style={styles.textButton}>Login</Text>
					</TouchableOpacity>
				)}
				<Text style={styles.registration}>
					Ainda não tem uma conta?
					<Text
						style={styles.links}
						onPress={() => navigation.navigate("NewUser")}
					>
						Crie uma agora...
					</Text>
					<View style={{ height: 100 }} />
				</Text>
			</Pressable>
		</KeyboardAvoidingView>
	);
}
