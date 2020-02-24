import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'galio-framework'

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text p muted>
        Hi, I'm a Galio component
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
