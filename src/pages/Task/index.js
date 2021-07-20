import React, { useState, useEffect } from "react";
import {
	SafeAreaView,
	View,
	Text,
	TouchableOpacity,
	FlatList,
} from "react-native";
import firebase from "../../config/firebase";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import styles from "./style";

export default function Task({ navigation, route }) {
	const [task, setTask] = useState([]);
	const database = firebase.firestore();

	function lougout() {
		firebase
			.auth()
			.signOut()
			.then(() => {
				navigation.navigate("Login");
			})
			.catch((error) => {
				// An error happened.
			});
	}

	function deleteTask(id) {
		database.collection(route.params.idUser).doc(id).delete();
	}

	useEffect(() => {
		database.collection(route.params.idUser).onSnapshot((query) => {
			const list = [];
			query.forEach((doc) => {
				list.push({ ...doc.data(), id: doc.id });
			});
			setTask(list);
		});
	}, []);

	return (
		<SafeAreaView style={styles.container}>
			<FlatList
				showsVerticalScrollIndicator={false}
				data={task}
				renderItem={({ item }) => {
					return (
						<SafeAreaView style={styles.Tasks}>
							<TouchableOpacity
								style={styles.deleteTouch}
								onPress={() => deleteTask(item.id)}
							>
								<FontAwesome
									name="close"
									size={30}
									color="#f92e6a"
									fontWeigth="bold"
								></FontAwesome>
							</TouchableOpacity>
							<Text
								style={styles.descriptionTask}
								onPress={() => {
									navigation.navigate("Details", {
										id: item.id,
										description: item.description,
										idUser: route.params.idUse,
									});
								}}
							>
								{item.description}
							</Text>
						</SafeAreaView>
					);
				}}
			/>
			<TouchableOpacity
				style={styles.touch}
				onPress={() =>
					navigation.navigate("NewTask", { idUser: route.params.idUser })
				}
			>
				<Text style={styles.iconTouch}>+</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.buttonLogout}
				onPress={() => {
					lougout();
				}}
			>
				<Text style={styles.iconLogout}>
					<MaterialCommunityIcons
						name="location-exit"
						size={30}
						color="#f92e6a"
					/>
				</Text>
			</TouchableOpacity>
		</SafeAreaView>
	);
}
