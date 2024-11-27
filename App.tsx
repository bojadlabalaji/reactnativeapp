import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from './src/context/ThemeContext';

// Import pages
import LandingPage from './src/pages/LandingPage';
import MapPage from './src/pages/MapPage';
import TeamPage from './src/pages/TeamPage';
import ProjectsPage from './src/pages/ProjectsPage';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen 
              name="Home" 
              component={LandingPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="Map" component={MapPage} />
            <Stack.Screen name="Team" component={TeamPage} />
            <Stack.Screen name="Projects" component={ProjectsPage} />
          </Stack.Navigator>
          <StatusBar style="auto" />
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
