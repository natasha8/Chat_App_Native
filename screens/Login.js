import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
	View,
	Text,
	Image,
	StyleSheet,
	KeyboardAvoidingView,
} from "react-native";
import { Input, Button } from "react-native-elements";
import { auth } from "../firebase";

const Login = ({ navigation }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((authUser) => {
			console.log(authUser);
			if (authUser) {
				navigation.replace("HOME");
			}
		});
		return unsubscribe;
	}, []);

	const signIn = () => {
		auth.signInWithEmailAndPassword(email, password).catch(
			(error) => alert.message.error
		);
	};

	return (
		<KeyboardAvoidingView
			behavior="padding"
			enabled
			style={styles.container}
		>
			<StatusBar style="dark" />
			<Image
				source={{
					uri: "https://freesvg.org/img/tete_de_chat_noir.png",
				}}
				style={{
					width: 200,
					height: 200,
					alignSelf: "center",
					marginBottom: 50,
				}}
			/>
			<View style={styles.inputContainer}>
				<Input
					placeholder="Email"
					autofocus
					type="email"
					value={email}
					onChangeText={(text) => setEmail(text)}
				/>
				<Input
					placeholder="Password"
					secureTextEntry
					type="password"
					value={password}
					onChangeText={(text) => setPassword(text)}
					onSubmitEditing={signIn}
				/>
			</View>
			<Button
				title="LOGIN"
				onPress={signIn}
				type="outline"
				containerStyle={styles.button}
			/>
			<Button
				title="REGISTER"
				type="outline"
				containerStyle={styles.button2}
				onPress={() => navigation.navigate("SIGN UP")}
			/>
		</KeyboardAvoidingView>
	);
};

export default Login;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "black",
		padding: 2,
	},
	inputContainer: { width: 300 },
	button: { backgroundColor: "#a1f00e", width: 280 },
	button2: { backgroundColor: "black", width: 280 },
});
