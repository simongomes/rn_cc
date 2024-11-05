import { StyleSheet, Text, View } from 'react-native';
import { Slot } from 'expo-router';

import '../assets/css/global.css';

const RootLayout = () => {
  return (
    <>
      <Text>Header</Text>
      <Slot />
      <Text>Footer</Text>
    </>
  )
}

export default RootLayout;