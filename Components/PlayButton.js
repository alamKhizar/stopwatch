import { StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

const PlayButton = ({ name, size, color, backgroundColor,onPress }) => {
  return (

    <TouchableOpacity
        onPress={onPress}
    >
    <View
      style={[
        styles.view,
        { backgroundColor: backgroundColor } // Apply backgroundColor here
      ]}
    >
      <Ionicons name={name} size={size} color={color} style={{ marginLeft: 0 }} />
    </View>
    </TouchableOpacity>
  );
};

export default PlayButton;

const styles = StyleSheet.create({
  view: {
    width: 60,
    height: 60,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
