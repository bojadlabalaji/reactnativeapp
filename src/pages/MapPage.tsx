import React from 'react';
import { View, Text, StyleSheet, Dimensions, Platform } from 'react-native';
import { teamMembers } from '../data/teamMembers';

// Web-specific imports
let MapView: any;
let Marker: any;
if (Platform.OS === 'web') {
  // Using a simple div for web - you could alternatively integrate a web-based map solution
  MapView = ({ children, style }: any) => (
    <div style={{ ...style, backgroundColor: '#f0f0f0' }}>
      <Text style={{ textAlign: 'center', padding: 20 }}>
        Map View (Web Version)
      </Text>
      {children}
    </div>
  );
  Marker = ({ title, description }: any) => (
    <div style={{ margin: 10, padding: 10, backgroundColor: '#fff' }}>
      <Text>{title}</Text>
      <Text>{description}</Text>
    </div>
  );
} else {
  // Native-specific imports
  const Maps = require('react-native-maps');
  MapView = Maps.default;
  Marker = Maps.Marker;
}

const MapPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Global Presence</Text>
      <MapView
        style={styles.map}
        initialRegion={Platform.OS !== 'web' ? {
          latitude: 20,
          longitude: 0,
          latitudeDelta: 180,
          longitudeDelta: 180,
        } : undefined}
      >
        {teamMembers.map((member, index) => (
          <Marker
            key={index}
            coordinate={Platform.OS !== 'web' ? {
              latitude: member.location.coordinates[1],
              longitude: member.location.coordinates[0],
            } : undefined}
            title={member.name}
            description={member.location.name}
          />
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#111827',
    padding: 16,
    paddingTop: 60,
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.75,
  },
});

export default MapPage;