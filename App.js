import React from "react";
import {
	NavigationContainer,
	DefaultTheme,
	DarkTheme,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
	AppearanceProvider,
	useColorScheme,
	Appearance,
} from "react-native-appearance";
import { StyleSheet, TouchableOpacity } from "react-native";

import Task from "./src/pages/Task";
import NewTask from "./src/pages/NewTask/index";
import Details from "./src/pages/Details/index";
import Login from "./src/pages/Login";
import NewUser from "./src/pages/NewUser";

const Stack = createStackNavigator();

export const ThemeContext = React.createContext();

export default function App() {
	const [theme, setTheme] = useState("Light");

	const themeData = { theme, setTheme };

	return (
		<ThemeContext.Provider value={themeData}>
			<NavigationContainer theme={theme === "dark" ? DarkTheme : DefaultTheme}>
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
								<TouchableOpacity
									style={styles.switchbutton}
									onPress={() => setTheme(theme === "Light" ? "Dark" : "Light")}
									title="Trocar"
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
		</ThemeContext.Provider>
	);
}

const styles = StyleSheet.create({
	switchbutton: {
		width: 20,
		height: 20,
		backgroundColor: "#f92a69",
	},
});

