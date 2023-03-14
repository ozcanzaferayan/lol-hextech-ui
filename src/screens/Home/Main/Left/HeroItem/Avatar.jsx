import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useRef } from 'react';
import { Animated, Easing, Image, StyleSheet, Text, View } from 'react-native';
import Colors from '@constants/Colors';

const Avatar = ({ avatar = '', isActive = false }) => {
  const spinValue = new Animated.Value(0);
  useEffect(() => {
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
  }, [spinValue]);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });
  return (
    <View style={styles.container}>
      {isActive && (
        <Animated.View
          style={{
            transform: [{ rotate: spin }],
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
          }}
        >
          <LinearGradient
            colors={[Colors.gold[600], Colors.gold[200]]}
            style={[styles.gradient]}
          />
        </Animated.View>
      )}
      <Image style={styles.image} source={{ uri: avatar }} />
    </View>
  );
};

export default Avatar;

const styles = StyleSheet.create({
  container: {
    width: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 1400,
    borderWidth: 1,
    borderColor: '#00000066',
  },
  gradient: {
    width: 44,
    height: 44,
    borderRadius: 44,
  },
});
