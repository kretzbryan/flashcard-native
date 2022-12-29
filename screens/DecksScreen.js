import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import List from '../components/list/List';
import uuid from 'react-uuid';
import MainView from '../components/ui/MainView';

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
	return (
		<MainView>
			<List
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
