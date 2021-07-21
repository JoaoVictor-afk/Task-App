import React from "react";
import {
	NavigationContainer,
	DefaultTheme,
	DarkTheme,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
	AppearanceProvider,
	useColorScheme,
	Appearance,
} from "react-native-appearance";
import { StyleSheet, Switch, TSwitch } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Task from "./src/pages/Task";
import NewTask from "./src/pages/NewTask/index";
import Details from "./src/pages/Details/index";
import Login from "./src/pages/Login";
import NewUser from "./src/pages/NewUser";

const Stack = createStackNavigator();

export const ThemeContext = React.createContext();

export default function App() {
	const [isEnabled, setIsEnabled] = useState(false);

	const getTheme = async () => {
		try {
			const theme = await AsyncStorage.getItem("theme");
			return theme;
		} catch (error) {
			console.log("error", error);
		}
	};

	const setTheme = async (theme) => {
		try {
			await AsyncStorage.setItem("theme", theme);
		} catch (error) {
			console.log("error", error);
		}
	};

	useEffect(() => {
		getTheme()
			.then((res) => {
				setIsEnabled(res === "light");
			})
			.catch((err) => {
				console.log("error", err);
			});
	}, []);

	const onChangeHandler = (value) => {
		if (value) {
			setIsEnabled(true);
			setTheme("light");
		} else {
			setIsEnabled(false);
			setTheme("dark");
		}
	};

	return (
		<ThemeContext.Provider value={themeData}>
			<NavigationContainer
				theme={isEnabled === false ? DarkTheme : DefaultTheme}
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
							headerRight: () => (
								<Switch
									style={styles.switchbutton}
									onValueChange={onChangeHandler}
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
