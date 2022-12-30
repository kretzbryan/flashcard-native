import { StatusBar } from 'expo-status-bar';

import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainTabs } from './navigators/MainTabs';
import GroupsScreen from './screens/GroupsScreen';
import DecksScreen from './screens/DecksScreen';
import GroupShowScreen from './screens/GroupShowScreen';
import DeckShowScreen from './screens/DeckShowScreen';
import { colors } from './utils/color_constants';
import SessionScreen from './screens/SessionScreen';

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<>
			<StatusBar style='auto' />
			<NavigationContainer>
				<Stack.Navigator
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
					<Stack.Screen
						name='MainTabs'
						component={MainTabs}
						options={{ headerShown: false }}
					/>
					<Stack.Screen
						name='GroupsScreen'
						options={{
							title: 'Groups',
						}}
						component={GroupsScreen}
					/>
					<Stack.Screen
						name='DecksScreen'
						options={{
							title: 'Decks',
						}}
						component={DecksScreen}
					/>
					<Stack.Screen
						name='DeckShowScreen'
						options={{
							title: 'Deck',
						}}
						component={DeckShowScreen}
					/>
					<Stack.Screen
						name='GroupShowScreen'
						options={{
							title: 'Group',
						}}
						component={GroupShowScreen}
					/>
					<Stack.Screen
						name='SessionScreen'
						options={{
							title: 'Session',
							headerShown: false,
						}}
						component={SessionScreen}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</>
	);
}
