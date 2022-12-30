import { Pressable, StyleSheet, Text, View } from 'react-native';

import { SimpleLineIcons } from '@expo/vector-icons';
import React from 'react';
import { colors } from '../../utils/color_constants';

const QuestionGroup = ({
	text,
	totalQuestions,
	totalAttempts,
	correctAttempts,
}) => {
	return (
		<View style={styles.listItem}>
			<Text style={[styles.listItemText, styles.text]}>{text}</Text>

			<Text style={[styles.totalQuestions, styles.text, styles.centerText]}>
				{' '}
				{totalQuestions}
			</Text>
			<Text style={[styles.average, styles.text, styles.centerText]}>
				{correctAttempts}/{totalAttempts}
			</Text>
			<Pressable style={styles.options} onPress={null}>
				<SimpleLineIcons
					name='options'
					size={20}
					color={colors.colorOffWhite}
				/>
			</Pressable>
		</View>
	);
};

export default QuestionGroup;

const styles = StyleSheet.create({
	listItem: {
		flexDirection: 'row',
		backgroundColor: colors.colorGreyBlue,
		marginVertical: 5,
		paddingVertical: 5,
		paddingHorizontal: 10,
		marginHorizontal: 15,
		height: 55,
		alignItems: 'center',
		borderRadius: 10,
	},
	text: {
		color: colors.colorOffWhite,
		fontSize: 16,
		fontWeight: 'bold',
	},
	listItemText: {
		flex: 4,
	},
	average: {
		flex: 2,
	},
	totalQuestions: {
		flex: 0.75,
	},
	options: {
		flex: 0.5,
	},
	centerText: {
		textAlign: 'center',
	},
});
