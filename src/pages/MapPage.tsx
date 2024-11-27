import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import MapView, { Marker, PROVIDER_DEFAULT } from 'react-native-maps';
import { teamMembers } from '../data/teamMembers';

const MapPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Global Presence</Text>
      <MapView
        provider={PROVIDER_DEFAULT}
        style={styles.map}
        initialRegion={{
          latitude: 20,
          longitude: 0,
          latitudeDelta: 180,
          longitudeDelta: 180,
        }}
        showsUserLocation={false}
      >
        {teamMembers.map((member, index) => (
          <Marker
            key={index}
            coordinate={{
              latitude: member.location.coordinates[1],
              longitude: member.location.coordinates[0],
            }}
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