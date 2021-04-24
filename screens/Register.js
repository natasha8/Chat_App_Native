import React, { useLayoutEffect, useState } from "react";
import { KeyboardAvoidingView, StyleSheet, View } from "react-native";
import { Input, Text, Button } from "react-native-elements";
import { StatusBar } from "expo-status-bar";
import { auth } from "../firebase";

const Register = ({ navigation }) => {
	const [fullName, setFullName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [imageUrl, setImageUrl] = useState("");

	useLayoutEffect(() => {
		navigation.setOptions({
			headerBackTitle: "Back to Login",
		});
	}, [navigation]);

	const register = () => {
		auth.createUserWithEmailAndPassword(email, password)
			.then((authUser) => {
				authUser.user.updateProfile({
					displayName: fullName,
					photoURL:
						imageUrl ||
						"https://freesvg.org/img/tete_de_chat_noir.png",
				});
			})
			.catch((error) => alert(error.message));
	};

	return (
		<KeyboardAvoidingView behavior="padding" style={styles.container}>
			<StatusBar style="dark" />
			<Text h3 style={{ marginBottom: 30, color: "white" }}>
				Create a free account.
			</Text>
			<View style={styles.inputContainer}>
				<Input
					autofocus
					type="text"
					value={fullName}
					onChangeText={(text) => setFullName(text)}
					placeholder="Full Name"
				/>
				<Input
					type="email"
					value={email}
					onChangeText={(text) => setEmail(text)}
					placeholder="Email"
				/>
				<Input
					type="password"
					value={password}
					onChangeText={(text) => setPassword(text)}
					placeholder="Password"
				/>
				<Input
					type="text"
					value={imageUrl}
					onChangeText={(text) => setImageUrl(text)}
					placeholder="Profile Picture (optional)"
					onSubmitEditing={register}
				/>
			</View>
			<Button
				onPress={register}
				title="Sign Up"
				type="outline"
				containerStyle={styles.button}
			/>
		</KeyboardAvoidingView>
	);
};

export default Register;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "black",
	},

	inputContainer: { width: 300 },
	button: { backgroundColor: "#a1f00e", width: 280 },
});
