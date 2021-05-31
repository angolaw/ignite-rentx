import React from 'react';
import { Home } from './src/screens/Home';
import {useFonts, Archivo_400Regular, Archivo_500Medium, Archivo_600SemiBold} from '@expo-google-fonts/archivo'
import {Inter_400Regular, Inter_500Medium} from '@expo-google-fonts/inter'
import AppLoading from 'expo-app-loading';

export default function App() {
  const [fontsLoaded] = useFonts({
    Archivo_400Regular, Archivo_500Medium,Archivo_600SemiBold,Inter_400Regular, Inter_500Medium
  })
  if(!fontsLoaded)
    <AppLoading/>
  return (
   <Home/>
  );
}

