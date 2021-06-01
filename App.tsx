import React from 'react';
import { Home } from './src/screens/Home';
import {useFonts, Archivo_400Regular, Archivo_500Medium, Archivo_600SemiBold} from '@expo-google-fonts/archivo'
import {Inter_400Regular, Inter_500Medium} from '@expo-google-fonts/inter'
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components';
import theme from './src/styles/theme';
import {StatusBar} from 'react-native'
import { CarDetails } from './src/screens/CarDetails';
import { Scheduling } from './src/screens/Scheduling';
import { SchedulingDetails } from './src/screens/SchedulingDetails';
import { SchedulingComplete } from './src/screens/SchedulingComplete';

export default function App() {
  const [fontsLoaded] = useFonts({
    Archivo_400Regular, Archivo_500Medium,Archivo_600SemiBold,Inter_400Regular, Inter_500Medium
  })
  if(!fontsLoaded)
    return <AppLoading/>
  return (
   <ThemeProvider  theme={theme} >
     <StatusBar barStyle={"light-content"} backgroundColor="transparent" translucent  />
     <SchedulingComplete/>
   </ThemeProvider>
  );
}

