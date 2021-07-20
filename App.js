import React from "react";
import {
	NavigationContainer,
	DefaultTheme,
	DarkTheme,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AppearanceProvider, useColorScheme } from "react-native-appearance";

import Task from "./src/pages/Task";
import NewTask from "./src/pages/NewTask/index";
import Details from "./src/pages/Details/index";
import Login from "./src/pages/Login";
import NewUser from "./src/pages/NewUser";

const Stack = createStackNavigator();

const darkTheme = {
	colors: {
		primary: "rgb(255, 45, 85)",
		background: "#000",
		card: "#f92e6a",
		text: "#fff",
	},
};

const lightTheme = {
	colors: {
		primary: "rgb(255, 45, 85)",
		background: "#fff",
		card: "#f92e6a",
		text: "#000",
	},
};

export default function App() {
	const colorScheme = useColorScheme();

	return (
		<AppearanceProvider>
			<NavigationContainer
				theme={colorScheme === "dark" ? darkTheme : lightTheme}
			>
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
		</AppearanceProvider>
	);
}
