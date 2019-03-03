import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import styles from "./styles";
import { grey } from 'ansi-colors';

export const GradientButton = ({ link, author }) => (
  <TouchableOpacity
    style={styles.buttonContainer}
    activeOpacity={0.5}
    onPress={link}
  >
    <LinearGradient
      colors={['#8797D6', '#9963ea']}
      start={{ x: 1.0, y: 1.0 }}
      end={{ x: 0.0, y: 0.0 }}
      style={styles.gradient}
    >
      <Text
        style={styles.buttonText}
      >
        {author}
      </Text>
    </LinearGradient>
  </TouchableOpacity>
)
