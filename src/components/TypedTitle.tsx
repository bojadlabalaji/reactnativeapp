import React, { useState, useEffect } from 'react';
import { Text, Animated, StyleSheet } from 'react-native';

interface TypedTitleProps {
  strings: string[];
  style?: object;
}

const TypedTitle: React.FC<TypedTitleProps> = ({ strings, style = {} }) => {
  const [currentStringIndex, setCurrentStringIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const cursorOpacity = new Animated.Value(1);

  useEffect(() => {
    const blinkAnimation = Animated.loop(
      Animated.sequence([
        Animated.timing(cursorOpacity, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(cursorOpacity, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
      ])
    );

    blinkAnimation.start();

    return () => blinkAnimation.stop();
  }, []);

  useEffect(() => {
    const currentFullText = strings[currentStringIndex];
    
    if (isTyping) {
      if (currentText.length < currentFullText.length) {
        // Typing forward
        const timeout = setTimeout(() => {
          setCurrentText(currentFullText.slice(0, currentText.length + 1));
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        // Wait before starting to delete
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, 1500);
        return () => clearTimeout(timeout);
      }
    } else {
      if (currentText.length === 0) {
        // Move to next string
        setCurrentStringIndex((prev) => (prev + 1) % strings.length);
        setIsTyping(true);
      } else {
        // Deleting
        const timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, 50);
        return () => clearTimeout(timeout);
      }
    }
  }, [currentText, isTyping, currentStringIndex, strings]);

  return (
    <Text style={[styles.container, style]}>
      <Text>{currentText}</Text>
      <Animated.Text style={[styles.cursor, { opacity: cursorOpacity }]}>
        _
      </Animated.Text>
    </Text>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cursor: {
    marginLeft: 2,
    fontSize: 24,
  },
});

export default TypedTitle;