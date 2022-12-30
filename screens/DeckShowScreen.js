import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import MainView from '../components/ui/MainView';
import HSMetrics from '../components/homeScreen/HSMetrics';
import uuid from 'react-uuid';
import List from '../components/list/List';
import QuestionGroup from '../components/deckShow/QuestionGroup';

const DeckShowScreen = ({ navigation }) => {
	const returnListItem = ({}) => {};

	const questionGroups = [
		{
			id: uuid(),
			name: 'Chronological',
			totalQuestions: 10,
			totalAttempts: 50,
			correctAttempts: 45,
		},
		{
			id: uuid(),
			name: 'Multiple Choice',
			totalQuestions: 7,
			totalAttempts: 50,
			correctAttempts: 45,
		},
		{
			id: uuid(),
			name: 'Simple Answer',
			totalQuestions: 12,
			totalAttempts: 50,
			correctAttempts: 45,
		},
		{
			id: uuid(),
			name: 'True/False',
			totalQuestions: 5,
			totalAttempts: 50,
			correctAttempts: 45,
		},
	];

	const renderItem = ({ item }) => {
		return <QuestionGroup text={item.name} {...item} />;
	};

	return (
		<MainView>
			<HSMetrics />
			<Pressable onPress={() => navigation.navigate('SessionScreen')}>
				<Text>Start Session</Text>
			</Pressable>
			<List renderItem={renderItem} data={questionGroups} />
		</MainView>
	);
};

export default DeckShowScreen;

const styles = StyleSheet.create({});
