import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { NativeBaseProvider } from "native-base";

import { lightTheme } from "@themes/light-theme";
import { Loading } from "@components/Loading";
import { Routes } from "@routes/index";

import {
  useFonts,
  Rubik_400Regular,
  Rubik_500Medium,
  Rubik_700Bold,
} from "@expo-google-fonts/rubik";

export default function App() {
  const [fontsLoaded] = useFonts({
    Rubik_400Regular,
    Rubik_500Medium,
    Rubik_700Bold,
  });

  return (
    <NativeBaseProvider>
      <ThemeProvider theme={lightTheme}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        {fontsLoaded ? <Routes /> : <Loading />}
      </ThemeProvider>
    </NativeBaseProvider>
  );
}
