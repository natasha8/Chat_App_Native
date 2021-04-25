import React, { useLayoutEffect } from "react";
import {
	SafeAreaView,
	ScrollView,
	StyleSheet,
	View,
	TouchableOpacity,
} from "react-native";
import CustomListItems from "../components/CustomListItems";
import { Avatar, Button } from "react-native-elements";
import { auth } from "../firebase";

const Home = ({ navigation }) => {
	useLayoutEffect(() => {
		navigation.setOptions({
			title: "Chat",
			headerStyle: { backgroundColor: "#5dff2c" },
			headerTitleStyle: { color: "black" },
			headerTitleAlign: "center",
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
		<SafeAreaView>
			<ScrollView>
				<CustomListItems />
			</ScrollView>
			<Button
				title="Profile"
				type="outline"
				containerStyle={styles.button}
				onPress={() => navigation.navigate("PROFILE")}
			/>
		</SafeAreaView>
	);
};

export default Home;

const styles = StyleSheet.create({
	button: { backgroundColor: "#a1f00e", width: "100%" },
});
