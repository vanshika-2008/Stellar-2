import HomeScreen from './screens/home';
import DailyPicScreen from './screens/DailyPic';
import StarMapScreen from './screens/starMap';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import SpaceCraftScreen from './screens/SpaceCraft';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions = {{
        headerShown : false
      }}>
        <Stack.Screen name = 'Home' component = {HomeScreen} />
        <Stack.Screen name = 'SpaceCrafts' component = {SpaceCraftScreen} />
        <Stack.Screen name = 'StarMap' component = {StarMapScreen} />
        <Stack.Screen name = 'DailyPictures' component = {DailyPicScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
