import React, { useLayoutEffect } from "react";
import {
	KeyboardAvoidingView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import { Avatar } from "react-native-elements";
import { auth } from "../firebase";

const Profile = ({ navigation }) => {
	useLayoutEffect(() => {
		navigation.setOptions({
			title: "PROFILE",
			headerTitleAlign: "center",
			headerBackTitleVisible: "visible",
			headerRight: () => (
				<View style={{ marginRight: 20 }}>
					<TouchableOpacity>
						<Avatar
							rounded
							source={{ uri: auth?.currentUser?.photoURL }}
						/>
					</TouchableOpacity>
				</View>
			),
		});
	}, []);
	return (
		<KeyboardAvoidingView
			behavior="padding"
			enabled
			style={styles.container}
		>
			<Text>Profile</Text>
		</KeyboardAvoidingView>
	);
};

export default Profile;

const styles = StyleSheet.create({});
