import React, { useState } from "react";
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import styles from "../assets/styles";
import HomeScreen from "../containers/Home";
import MatchesScreen from "../containers/Matches";
import MessagesScreen from "../containers/Messages";
import ProfileScreen from "../containers/Profile";
// import Icon from "./components/Icon";
import Icon from 'react-native-vector-icons/FontAwesome';

function MyTabBar({ state, descriptors, navigation }) {
	const [ initialState, setState ] = useState({
		routes: [
			{ name: "search", title: "EXPLORE", screen: "explore" },
			{ name: "heart", title: "MATCHES", screen: "heart" },
			{ name: "group", title: "CHAT", screen: "chat" },
			{ name: "user", title: "PROFILE", screen: "user" },
		],
		index: 0
	});


  return (
    <View style={{ flexDirection: 'row' }}>
      {initialState.routes.map((route, index) => {

        const isFocused = initialState.index === index;

        const onPress = (index) => {
			setState({ ...initialState, index });
			const event = navigation.emit({
				type: 'tabPress',
				target: route.key,
				canPreventDefault: true,
			});

			if (!isFocused && !event.defaultPrevented) {
				navigation.navigate(route.screen);
			}
        };

        const onLongPress = () => {
			navigation.emit({
				type: 'tabLongPress',
				target: route.key,
			});
        };

		const iconFocused = isFocused ? "#7444C0" : "#363636";

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            // accessibilityLabel={options.tabBarAccessibilityLabel}
            // testID={options.tabBarTestID}
            onPress={() => onPress(index)}
            onLongPress={onLongPress}
            style={{ flex: 1 }}
          >
			  <View style={{ alignItems: 'center', justifyContent: 'center', height: 50 }}>
				<Text style={[styles.iconMenu, { color: iconFocused }]}>
					<Icon size={17} name={route.name} />
				</Text>
				<Text>{ route.title }</Text>
			  </View>

          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const Tab = createBottomTabNavigator();

function Main() {
  return (
	<NavigationContainer>
		<Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
			<Tab.Screen name="explore" component={HomeScreen} />
			<Tab.Screen name="heart" component={MatchesScreen} />
			<Tab.Screen name="chat" component={MessagesScreen} />
			<Tab.Screen name="user" component={ProfileScreen} />
		</Tab.Navigator>
	</NavigationContainer>
  );
};
export default Main;
