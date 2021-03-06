import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

export default {
  title: 'LinearGradient',
};

export const linearGradient = () => (
  <LinearGradient
    style={{ flex: 1, height: 200 }}
    colors={['red', 'blue', 'yellow']}
  />
);

// On-Device Register
