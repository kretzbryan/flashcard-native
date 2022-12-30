import { ScrollView, StyleSheet } from 'react-native';
import React from 'react';
import HSMetrics from '../components/homeScreen/HSMetrics';
import List from '../components/list/List';
import uuid from 'react-uuid';
import MainView from '../components/ui/MainView';
import ListItem from '../components/list/ListItem';

const HomeScreen = () => {
	const groups = [
		{
			id: uuid(),
			name: 'Semester 1',
		},
		{
			id: uuid(),
			name: 'Semester 2',
		},
		{
			id: uuid(),
			name: 'Semester 3',
		},
		{
			id: uuid(),
			name: 'Chemistry Prereqs',
		},
	];

	const decks = [
		{
			id: uuid(),
			name: 'Chemistry 1',
		},
		{
			id: uuid(),
			name: 'Intro to Environmental Science',
		},
		{
			id: uuid(),
			name: 'Statistics',
		},
		{
			id: uuid(),
			name: 'Chemistry Prereqs',
		},
	];

	const popQuizes = [
		{
			id: uuid(),
			name: 'Chemistry 1',
		},
		{
			id: uuid(),
			name: 'Intro to Environmental Science',
		},
		{
			id: uuid(),
			name: 'Statistics',
		},
		{
			id: uuid(),
			name: 'Chemistry Prereqs',
		},
	];

	const renderItem = ({ item }, showItemNav) => {
		return <ListItem showItemNav={showItemNav} text={item.name} />;
	};

	return (
		<MainView scrollable>
			<HSMetrics />
			<ScrollView
				style={styles.scrollContainer}
				contentContainerStyle={{ flexGrow: 1 }}>
				<List
					renderItem={renderItem}
					data={groups}
					maxLength={3}
					keyName='recent-groups'
					listTitle='RECENT GROUPS'
					showItemNav='GroupShowScreen'
					showItemsNav='GroupsScreen'
				/>
				<List
					renderItem={renderItem}
					data={decks}
					maxLength={3}
					keyName='recent-decks'
					listTitle='RECENT DECKS'
					showItemNav='DeckShowScreen'
					showItemsNav='DecksScreen'
				/>

				<List
					renderItem={renderItem}
					data={popQuizes}
					maxLength={3}
					keyName='pop-quizes'
					listTitle='POP QUIZES'
					showItemNav=''
				/>
			</ScrollView>
		</MainView>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({
	scrollContainer: {
		flex: 1,
		paddingBottom: 0,
		marginBottom: 0,
		height: 400,
	},
});
