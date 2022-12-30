import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import List from '../components/list/List';
import uuid from 'react-uuid';
import MainView from '../components/ui/MainView';
import HSMetrics from '../components/homeScreen/HSMetrics';
import ListItem from '../components/list/ListItem';

const GroupShowScreen = () => {
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

	const renderItem = ({ item }, showItemNav) => {
		return <ListItem showItemNav={showItemNav} text={item.name} />;
	};
	return (
		<MainView>
			<HSMetrics />
			<List
				renderItem={renderItem}
				data={decks}
				keyName='recent-groups'
				listTitle='RECENT GROUPS'
				showItemNav='DeckShowScreen'
			/>
		</MainView>
	);
};

export default GroupShowScreen;

const styles = StyleSheet.create({});
