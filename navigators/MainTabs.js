import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';
import { colors } from '../utils/color_constants';

const BottomTabs = createBottomTabNavigator();

export const MainTabs = () => {
	return (
		<BottomTabs.Navigator
			screenOptions={{
				headerStyle: {
					backgroundColor: colors.colorDarkBlue,
				},
				headerTintColor: colors.colorOffWhite,
				tabBarStyle: {
					backgroundColor: colors.colorDarkBlue,
				},
				tabBarActiveTintColor: colors.colorOffWhite,
			}}>
			<BottomTabs.Screen
				name='HomeScreen'
				component={HomeScreen}
				options={{
					title: 'Home',
					tabBarLabel: 'Home',
					tabBarIcon: ({ color, size }) => {
						return <Ionicons name='home' size={size} color={color} />;
					},
				}}
			/>
			<BottomTabs.Screen
				name='ProfileScreen'
				component={ProfileScreen}
				options={{
					title: 'Profile',
					tabBarLabel: 'Profile',
					tabBarIcon: ({ color, size }) => {
						return (
							<Ionicons name='person-circle-sharp' size={size} color={color} />
						);
					},
				}}
			/>
			<BottomTabs.Screen
				name='SettingsScreen'
				component={SettingsScreen}
				options={{
					title: 'Settings',
					tabBarLabel: 'Settings',
					tabBarIcon: ({ color, size }) => {
						return <Ionicons name='settings' size={size} color={color} />;
					},
				}}
			/>
		</BottomTabs.Navigator>
	);
};
