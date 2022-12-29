import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import MainView from '../components/ui/MainView';
import HSMetrics from '../components/homeScreen/HSMetrics';

const DeckShowScreen = () => {
	return (
		<MainView>
			<HSMetrics />
		</MainView>
	);
};

export default DeckShowScreen;

const styles = StyleSheet.create({});
