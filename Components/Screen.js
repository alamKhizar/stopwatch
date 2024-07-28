import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { colors } from '../assets/Colors/Colors';
import PlayButton from './PlayButton';

const Screen = () => {
  const [time, setTime] = useState({
    hr: 0,
    min: 0,
    sec: 0,
    mili: 0,
  });

  const interval = useRef(null);

  const start = () => {
    interval.current = setInterval(() => {
      timeFunction();
    }, 10);
  };

  const stop = () => {
    if (interval.current) {
      clearInterval(interval.current);
    }
  };

  const reset = () => {
    if (interval.current) {
      clearInterval(interval.current);
    }

    setTime({
      hr: 0,
      min: 0,
      sec: 0,
      mili: 0,
    });
  };

  const timeFunction = () => {
    setTime((prevTime) => {
      let { hr, min, sec, mili } = prevTime;

      mili += 1;
      if (mili >= 100) {
        mili = 0;
        sec += 1;
      }
      if (sec >= 60) {
        sec = 0;
        min += 1;
      }
      if (min >= 60) {
        min = 0;
        hr += 1;
      }

      return { hr, min, sec, mili };
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {String(time.hr).padStart(2, '0')}:{String(time.min).padStart(2, '0')}:
        {String(time.sec).padStart(2, '0')}:{String(time.mili).padStart(2, '0')}
      </Text>

      <View style={{ flexDirection: 'row', gap: 20 }}>
        <PlayButton
          name={"play"}
          size={24}
          color={colors['red-button-color-foreground']}
          backgroundColor={"#32100F"}
          onPress={start}
        />
        <PlayButton
          name={"pause"}
          size={24}
          color={colors['yellow-button-color-foreground']}
          backgroundColor={"#301E02"}
          onPress={stop}
        />
        <PlayButton
          name={"reload"}
          size={24}
          color={colors['blue-button-color-foreground']}
          backgroundColor={"#1A3B3D"}
          onPress={reset}
        />
      </View>
    </View>
  );
};

export default Screen;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors['background-color'],
  },
  text: {
    fontFamily: 'Futura-Medium',
    fontSize: 50,
    color: 'white',
    marginBottom: 50,
  },
});
