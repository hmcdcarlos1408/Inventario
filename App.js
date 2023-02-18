import React from "react";
import {
  Text,
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Box,
} from "native-base";
import Navigation from "./Navigation";


export default function App() {
  return (
    <NativeBaseProvider>
     <Navigation/>
    </NativeBaseProvider>
  );
}

