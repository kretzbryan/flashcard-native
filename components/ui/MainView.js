import { StyleSheet } from 'react-native';
import React from 'react';
import { colors } from '../../utils/color_constants';

import { SafeAreaView } from 'react-native-safe-area-context';

const MainView = ({ children }) => {
	return (
		<SafeAreaView style={styles.container} forceInset={{ top: 'always' }}>
			{children}
		</SafeAreaView>
	);
};

export default MainView;

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.colorDarkBlue,
		flex: 1,
	},
});
