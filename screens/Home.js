import React, { useLayoutEffect } from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import CustomListItems from "../components/CustomListItems";

const Home = ({ navigation }) => {
	useLayoutEffect(() => {
		navigation.setOptions({
			title: "Maow Chat",
			headerStyle: { backgroundColor: "#5dff2c" },
			headerTitleStyle: { color: "black" },
		});
	}, []);
	return (
		<SafeAreaView>
			<ScrollView>
				<CustomListItems />
			</ScrollView>
		</SafeAreaView>
	);
};

export default Home;

const styles = StyleSheet.create({});
