import React, { useState, useEffect } from "react";
import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ThemeProvider, DefaultTheme } from "styled-components";
import { StyleSheet, Switch, TSwitch } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Task from "./src/pages/Task";
import NewTask from "./src/pages/NewTask/index";
import Details from "./src/pages/Details/index";
import Login from "./src/pages/Login";
import NewUser from "./src/pages/NewUser";

const Stack = createStackNavigator();

export default function App() {
	const [theme, setTheme] = useState("light");

	const storeKey = "myPreference";

	const dark = {
		colors: {
			primary: "rgb(255, 45, 85)",
			background: "#000",
			card: "#f92a69",
			text: "#fff",
		},
	};
	const light = {
		colors: {
			primary: "#f92a69",
			background: "#fff",
			card: "#f92a69",
			text: "#fff",
		},
	};

	const toggleTheme = () => {
		theme === "light" ? setTheme("dark") : setTheme("light");
	};

	storeData = async () => {
		try {
			await AsyncStorage.setItem(storeKey, theme);
		} catch (error) {
			// Error saving data
		}
	};

	retrieveData = async (storeKey) => {
		try {
			const value = await AsyncStorage.getItem(storeKey);
			if (value !== "light") {
				setTheme(value);
				console.log(value);
			}
		} catch (error) {
			// Error retrieving data
		}
	};

	return (
		<NavigationContainer theme={theme === "light" ? light : dark}>
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
						},
						headerRight: () => (
							<Switch
								style={styles.switchbutton}
								onChange={toggleTheme}
								color="#000"
							/>
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

const styles = StyleSheet.create({
	switchbutton: {
		width: 80,
		height: 40,
		backgroundColor: "#f92a69",
	},
});
