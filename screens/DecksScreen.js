import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import List from '../components/list/List';
import uuid from 'react-uuid';
import MainView from '../components/ui/MainView';
import ListItem from '../components/list/ListItem';

const DecksScreen = () => {
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
			<List
				renderItem={renderItem}
				data={decks}
				showItemNav='DeckShowScreen'
				keyName='recent-groups'
				listTitle='ALL DECKS'
			/>
		</MainView>
	);
};

export default DecksScreen;

const styles = StyleSheet.create({});
