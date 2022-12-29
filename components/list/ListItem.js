import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { colors } from '../../utils/color_constants';
import { useNavigation } from '@react-navigation/native';

const ListItem = ({ text, showItemNav, showItemsNav }) => {
	const navigation = useNavigation();
	return (
		<Pressable
			onPress={showItemNav ? () => navigation.navigate(showItemNav) : null}
			style={styles.listItem}>
			<Text style={styles.listItemText}>{text}</Text>
		</Pressable>
	);
};

export default ListItem;

const styles = StyleSheet.create({
	listItem: {
		backgroundColor: colors.colorGreyBlue,
		marginVertical: 5,
		paddingVertical: 5,
		paddingHorizontal: 10,
		borderRadius: 10,
	},
	listItemText: {
		color: colors.colorOffWhite,
		fontSize: 16,
		fontWeight: 'bold',
	},
});
