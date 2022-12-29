import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { PieChart } from 'react-native-gifted-charts';
import { colors } from '../../utils/color_constants';

const HSMetrics = () => {
	const data = [
		{
			// key: 1,
			text: '50',
			value: 50,
			// svg: { fill: '#600080' },
		},
		{
			// key: 2,
			text: '50',
			value: 50,
			// svg: { fill: '#9900cc' },
		},
		{
			// key: 3,
			text: '50',
			value: 40,
			// svg: { fill: '#c61aff' },
		},
		{
			// key: 4,
			text: '50',
			value: 95,
			// svg: { fill: '#d966ff' },
		},
		{
			// key: 5,
			text: '50',
			value: 35,
			// svg: { fill: '#ecb3ff' },
		},
	];

	return (
		<View style={styles.container}>
			<View style={styles.column}>
				<View style={styles.textContainer}>
					<Text style={[styles.text, styles.smallText]}>Average Daily</Text>
					<Text style={[styles.text, styles.smallText]}>Study Time</Text>
					<Text style={[styles.text, styles.time]}>15h</Text>
					<Text style={[styles.text, styles.smallText]}>past week</Text>
				</View>
			</View>
			<View style={styles.column}>
				<PieChart
					// style={{ height: 200 }}
					// valueAccessor={({ item }) => item.amount}
					radius={80}
					data={data}
					textColor='black'
					textSize={20}
					showText={true}
				/>
			</View>
		</View>
	);
};

export default HSMetrics;

const styles = StyleSheet.create({
	text: {
		textAlign: 'center',
		color: colors.colorOffWhite,
	},
	time: {
		fontSize: 26,
		fontWeight: 'bold',
		paddingVertical: 10,
	},
	smallText: {
		fontSize: 18,
	},
	textContainer: {
		height: 175,
		width: 175,
		justifyContent: 'center',
		backgroundColor: colors.colorGreyBlue,
		paddingVertical: 10,
		paddingHorizontal: 5,
		borderRadius: 5,
	},
	column: { width: '50%', alignItems: 'center' },
	container: {
		width: '100%',
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: 15,
		paddingVertical: 20,
	},
});
