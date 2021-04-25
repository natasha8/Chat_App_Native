import React from "react";
import { StyleSheet, Button } from "react-native";
import { Avatar, ListItem } from "react-native-elements";

const CustomListItems = ({ id, chatName, enterChat }) => {
	return (
		<ListItem>
			<Avatar
				rounded
				source={{
					uri: "https://freesvg.org/img/tete_de_chat_noir.png",
				}}
			/>

			<ListItem.Content>
				<ListItem.Title style={{ fontWeight: "800" }}>
					Maow Chat
				</ListItem.Title>
				<ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
					This is subtitles This is subtitles This is subtitles This
					is subtitles This is subtitles This is subtitles
				</ListItem.Subtitle>
			</ListItem.Content>
		</ListItem>
	);
};

export default CustomListItems;

const styles = StyleSheet.create({});
