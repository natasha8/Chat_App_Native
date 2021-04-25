import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Home from "./screens/Home";
import Profile from "./screens/Profile";

const Stack = createStackNavigator();

const globalScreenOptions = {
	headerStyle: { backgroundColor: "#a1f00e" },
	headerTitleStyle: {
		flex: 1,
		color: "black",
		fontWeight: "bold",
		alignSelf: "center",
	},
	headerTintColor: "black",
};

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={globalScreenOptions}
				initialRouteName="HOME"
			>
				<Stack.Screen name="LOGIN" component={Login} />
				<Stack.Screen name="SIGN UP" component={Register} />
				<Stack.Screen name="HOME" component={Home} />
				<Stack.Screen name="PROFILE" component={Profile} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#6b725e",
		alignItems: "center",
		justifyContent: "center",
	},
});
