import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useRef } from 'react';
import { Animated, Easing, Image, StyleSheet, Text, View } from 'react-native';
import Colors from '@constants/Colors';

const AnimationBackground = () => {
  const translateX = useRef(new Animated.Value(-740.5)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(translateX, {
        toValue: 0,
        duration: 4000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
  }, [translateX]);

  const animatedStyles = {
    transform: [{ translateX }],
  };
  return (
    <View
      style={{
        width: 200,
        overflow: 'hidden',
        flexDirection: 'row',
        position: 'absolute',
      }}
    >
      <View style={{ width: 3, backgroundColor: Colors.gold[400] }}></View>
      <Animated.View style={[styles.box, animatedStyles]}>
        <Image
          source={require('@assets/tearsheet.png')}
          style={{ width: 740.5, height: 60 }}
        />
        <Image
          source={require('@assets/tearsheet.png')}
          style={{ width: 740.5, height: 60 }}
        />
      </Animated.View>
      <LinearGradient
        style={styles.gradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={['#10131500', '#10131599']}
      />
    </View>
  );
};

export default AnimationBackground;

const styles = StyleSheet.create({
  gradient: {
    width: 20,
    height: 60,
    position: 'absolute',
    right: 0,
  },
  box: {
    flexDirection: 'row',
  },
});
