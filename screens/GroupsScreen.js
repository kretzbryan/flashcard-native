import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import List from '../components/list/List';
import uuid from 'react-uuid';
import MainView from '../components/ui/MainView';

const GroupsScreen = () => {
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
	return (
		<MainView>
			<List
				data={groups}
				keyName='recent-groups'
				listTitle='ALL GROUPS'
				showItemNav='GroupShowScreen'
			/>
		</MainView>
	);
};

export default GroupsScreen;

const styles = StyleSheet.create({});
