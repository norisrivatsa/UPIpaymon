import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';

const Bar = ({ value, label, maxValue }) => {
  const animatedHeight = useSharedValue(0);

  React.useEffect(() => {
    animatedHeight.value = withTiming((value / maxValue) * 200, { duration: 800 });
  }, [value, maxValue]);

  const animatedStyle = useAnimatedStyle(() => ({
    height: animatedHeight.value,
  }));

  return (
    <View style={styles.barContainer}>
      <Animated.View style={[styles.bar, animatedStyle]} />
      <Text style={styles.barLabel}>{label}</Text>
    </View>
  );
};

const BarGraph = () => {
  const data = [
    { label: 'Mon', value: 50 },
    { label: 'Tue', value: 80 },
    { label: 'Wed', value: 30 },
    { label: 'Thur', value: 100 },
    { label: 'Fri', value: 70 },
  ];

  const maxValue = Math.max(...data.map(item => item.value));

  return (
    <View style={styles.container}>
      {data.map((item, index) => (
        <Bar key={index} value={item.value} label={item.label} maxValue={maxValue} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position : 'relative',
    top : "20%",
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-around',
    height: 250,
    padding: 20,
  },
  barContainer: {
    alignItems: 'center',
  },
  bar: {
    width: 30,
    backgroundColor: '#4CAF50',
    borderRadius: 5,
  },
  barLabel: {
    marginTop: 5,
    fontSize: 12,
  },
});

export default BarGraph;
