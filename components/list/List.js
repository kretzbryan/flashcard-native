import {
	Button,
	Pressable,
	StyleSheet,
	Text,
	View,
	FlatList,
} from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import React from 'react';
import { colors } from '../../utils/color_constants';
import ListItem from './ListItem';
import { useNavigation } from '@react-navigation/native';

const List = ({
	maxLength,
	data,
	showItemNav,
	listTitle,
	showItemsNav,
	renderItem,
}) => {
	data = data.length > maxLength ? data.slice(0, maxLength) : data;
	const navigation = useNavigation();

	// const renderItem = ({ item }) => {
	// 	return <ListItem showItemNav={showItemNav} text={item.name} />;
	// };

	const returnList = () => {
		if (maxLength) {
			return data.length
				? data.map((item) => {
						// return (
						// 	<ListItem
						// 		showItemNav={showItemNav}
						// 		key={item.id}
						// 		text={item.name}
						// 	/>
						// );
						return renderItem({ item }, showItemNav);
				  })
				: null;
		} else {
			return data.length ? (
				<FlatList
					data={data}
					renderItem={(item) => renderItem(item, showItemNav)}
					// keyExtractor={(item) => item.id}
				/>
			) : null;
		}
	};

	return (
		<View style={styles.listContainer}>
			<View style={styles.listHeaderContainer}>
				<Text style={styles.listHeaderText}>{listTitle}</Text>
				<Pressable
					onPress={
						showItemsNav ? () => navigation.navigate(showItemsNav) : null
					}>
					<SimpleLineIcons
						name='options'
						size={20}
						color={colors.colorOffWhite}
					/>
				</Pressable>
			</View>

			{returnList()}
		</View>
	);
};

export default List;

const styles = StyleSheet.create({
	listHeaderContainer: {
		width: '100%',
		paddingVertical: 5,
		paddingRight: 5,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	listHeaderText: {
		fontSize: 16,
		color: colors.colorOffWhite,
		fontWeight: 'bold',
		letterSpacing: 1,
	},
	listContainer: { padding: 10 },
});
