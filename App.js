import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AppLoading from "expo-app-loading";
import { StatusBar } from "expo-status-bar";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";

import Estoque from "./src/pages/Estoque";
import NewTask from "./src/pages/NewTask/index";
import Details from "./src/pages/Details/index";
import Login from "./src/pages/Login";
import NewUser from "./src/pages/NewUser";

const Stack = createStackNavigator();

export default function App() {
	const [Loaded, setLoaded] = useState(false);
	const [theme, setTheme] = useState("");
	const STORAGE_KEY = "preferencia";

	const saveData = async () => {
		try {
			await AsyncStorage.setItem(STORAGE_KEY, theme);
			console.log(theme);
		} catch (e) {}
	};
	const readData = async () => {
		try {
			const value = await AsyncStorage.getItem(STORAGE_KEY);

			if (value !== null) {
				value === "light" ? setTheme("dark") : setTheme("light");
				console.log(value);
				setLoaded(true);
			}
		} catch (e) {}
	};

	const darkTheme = {
		colors: {
			primary: "#000",
			background: "#000",
			card: "red",
			text: "#000",
			border: "rgb(199, 199, 204)",
			notification: "rgb(255, 69, 58)",
		},
	};
	const lightTheme = {
		colors: {
			primary: "#fff",
			background: "#fff",
			card: "red",
			text: "#fff",
			border: "rgb(199, 199, 204)",
			notification: "rgb(255, 69, 58)",
		},
	};

	const toggleTheme = () => {
		theme === "light" ? setTheme("dark") : setTheme("light");
		saveData(STORAGE_KEY, theme);
	};

	useEffect(() => {
		readData();
	}, []);
	if (!Loaded) {
		return <AppLoading />;
	}
	return (
		<NavigationContainer theme={theme === "dark" ? darkTheme : lightTheme}>
			<View>
				<StatusBar hidden={true} />
			</View>
			<Stack.Navigator initialRouteName="Login">
				<Stack.Screen
					name="Login"
					component={Login}
					options={{
						headerShown: false,
						headerTitleStyle: {
							fontWeight: "bold",
						},
					}}
				/>
				<Stack.Screen
					name="NewUser"
					component={NewUser}
					options={{
						headerShown: false,
						headerTitleStyle: {
							fontWeight: "bold",
						},
					}}
				/>
				<Stack.Screen
					name="Estoque"
					component={Estoque}
					options={{
						headerLeft: null,

						headerTitleStyle: {
							fontWeight: "bold",
							fontSize: 28,
						},
						headerStyle: {
							backgroundColor: "#ff0000",
						},
						headerRight: () => (
							<TouchableOpacity onPress={toggleTheme} style={styles.touchTheme}>
								<Text>
									<MaterialCommunityIcons
										name="theme-light-dark"
										size={40}
										fontWeight="bold"
										color="#b5b5b5"
									/>
									Trocar Tema
								</Text>
							</TouchableOpacity>
						),
					}}
				/>
				<Stack.Screen
					name="NewTask"
					component={NewTask}
					options={{
						headerTitleStyle: {
							fontWeight: "bold",
						},
						headerStyle: {
							backgroundColor: "#ff0000",
						},
					}}
				/>
				<Stack.Screen
					name="Details"
					component={Details}
					options={{
						headerTitleStyle: {
							fontWeight: "bold",
						},
						headerStyle: {
							backgroundColor: "#ff0000",
						},
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	touchTheme: {
		width: 20,
		height: 20,
	},
});

