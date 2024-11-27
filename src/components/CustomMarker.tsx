import React from 'react';
import { View, Image, StyleSheet, Pressable } from 'react-native';
import { Marker } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  Map: { center: { latitude: number; longitude: number }; zoom: number };
};

interface CustomMarkerProps {
  member: any;
  position: {
    latitude: number;
    longitude: number;
  };
}

const CustomMarker: React.FC<CustomMarkerProps> = ({ member, position }) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handlePress = () => {
    navigation.navigate('Map', {
      center: position,
      zoom: 10
    });
  };

  return (
    <Marker
      coordinate={position}
      onPress={handlePress}
    >
      <View style={styles.markerWrapper}>
        <View style={styles.markerContent}>
          <View style={styles.markerPin} />
          <Image 
            source={{ uri: member.profile }} 
            style={styles.markerImage}
          />
        </View>
      </View>
    </Marker>
  );
};

const styles = StyleSheet.create({
  markerWrapper: {
    alignItems: 'center',
  },
  markerContent: {
    position: 'relative',
  },
  markerPin: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: '#000',
  },
  markerImage: {
    width: 36,
    height: 36,
    borderRadius: 18,
    position: 'absolute',
    top: 2,
    left: 2,
  },
});

export default CustomMarker; 