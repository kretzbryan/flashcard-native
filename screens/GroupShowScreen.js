import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import List from '../components/list/List';
import uuid from 'react-uuid';
import MainView from '../components/ui/MainView';
import HSMetrics from '../components/homeScreen/HSMetrics';

const GroupShowScreen = () => {
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
			<HSMetrics />
			<List
				data={groups}
				maxLength={3}
				keyName='recent-groups'
				listTitle='RECENT GROUPS'
			/>
		</MainView>
	);
};

export default GroupShowScreen;

const styles = StyleSheet.create({});
