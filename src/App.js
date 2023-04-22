
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TextoCentral from './components/TextoCentral';

import Home from './views/home';
import Contato from './views/contato';
import Skills from './views/skills';

const Stack = createNativeStackNavigator();

function App(){

  return (
    <SafeAreaView style={ styles.safeArea }>
      <StatusBar/>
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName="Home"
          screenOptions={{ headerShown: true }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Contato" component={Contato} />
          <Stack.Screen name="Skills" component={Skills} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea:{
    flex: 1,
  }
});

export default App;
