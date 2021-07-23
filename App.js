import React, { useState, useEffect } from "react";
import { NavigationContainer, useTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
	StyleSheet,
	Switch,
	TouchableOpacity,
	Text,
	Button,
	Animated,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import Task from "./src/pages/Task";
import NewTask from "./src/pages/NewTask/index";
import Details from "./src/pages/Details/index";
import Login from "./src/pages/Login";
import NewUser from "./src/pages/NewUser";
import { ThemeProvider } from "styled-components";

const Stack = createStackNavigator();

export default function App() {
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
			}
		} catch (e) {
			alert("Failed to fetch the data from storage");
		}
	};

	useEffect(() => {
		readData();
	}, []);

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

	return (
		<NavigationContainer theme={theme === "dark" ? darkTheme : lightTheme}>
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
					name="Task"
					component={Task}
					options={{
						headerLeft: null,

						headerTitleStyle: {
							fontWeight: "bold",
							fontSize: 28,
						},
						headerRight: () => (
							<TouchableOpacity onPress={toggleTheme}>
								<Text>
									<MaterialCommunityIcons
										name="theme-light-dark"
										size={40}
										fontWeight="bold"
										color="#b5b5b5"
									/>
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
					}}
				/>
				<Stack.Screen
					name="Details"
					component={Details}
					options={{
						headerTitleStyle: {
							fontWeight: "bold",
						},
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
