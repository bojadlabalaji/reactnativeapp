import React, { useEffect } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import Animated, { 
  useAnimatedStyle, 
  withRepeat, 
  withTiming, 
  withSequence,
  Easing,
  FadeInLeft,
  FadeInRight,
  useSharedValue,
} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import TypedTitle from '../components/TypedTitle';

const ironmanGif = require('../images/ironman.gif');
const capGif = require('../images/cap.gif');
const wandaGif = require('../images/wanda.gif');
const teamImage = require('../images/team.jpeg');
const mapImage = require('../images/map.jpeg');
const projectsImage = require('../images/projects.jpeg');

const { width, height } = Dimensions.get('window');

const LandingPage = ({ navigation }: { navigation: any }) => {
  // Create animated values for each character
  const ironmanPosition = useSharedValue(-150);
  const capPosition = useSharedValue(-150);
  const wandaPosition = useSharedValue(0);

  // Setup animations
  useEffect(() => {
    // Ironman flying animation
    ironmanPosition.value = withRepeat(
      withTiming(width + 150, {
        duration: 5000,
        easing: Easing.linear
      }),
      -1
    );

    // Captain America running animation
    capPosition.value = withRepeat(
      withTiming(width + 150, {
        duration: 4000,
        easing: Easing.linear
      }),
      -1
    );

    // Wanda floating animation
    wandaPosition.value = withRepeat(
      withSequence(
        withTiming(-20, {
          duration: 3000,
          easing: Easing.inOut(Easing.ease),
        }),
        withTiming(0, {
          duration: 3000,
          easing: Easing.inOut(Easing.ease),
        })
      ),
      -1
    );
  }, []);

  // Create animated styles
  const ironmanStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: ironmanPosition.value },
      { translateY: -50 },
      { rotate: '45deg' },
    ],
  }));

  const capStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: capPosition.value },
    ],
  }));

  const wandaStyle = useAnimatedStyle(() => ({
    transform: [
      { translateY: wandaPosition.value },
    ],
  }));

  return (
    <ScrollView style={styles.container}>
      {/* Hero Section */}
      <View style={styles.hero}>
        {/* Character Animations */}
        <Animated.Image
          source={ironmanGif}
          style={[styles.characterGif, styles.ironmanGif, ironmanStyle]}
        />
        <Animated.Image
          source={capGif}
          style={[styles.characterGif, styles.capGif, capStyle]}
        />
        <Animated.Image
          source={wandaGif}
          style={[styles.characterGif, styles.wandaGif, wandaStyle]}
        />

        {/* Main Content */}
        <View style={styles.heroContent}>
          <TypedTitle
            strings={['TEAM AVENGERS', 'MIGHTIEST DEVELOPERS']}
            style={styles.heroTitle}
          />
          <Text style={styles.heroSubtitle}>
            UC's Mightiest Techies
          </Text>
        </View>
      </View>

      {/* Content Sections */}
      <View style={styles.contentContainer}>
        {/* Team Section */}
        <View style={styles.section}>
          <Animated.View 
            entering={FadeInLeft}
            style={styles.sectionContent}
          >
            <Icon name="shield-account" size={48} style={styles.icon} />
            <Text style={styles.sectionTitle}>Elite Team</Text>
            <Text style={styles.sectionText}>
              Meet Earth's mightiest developers, each bringing unique abilities and expertise to defend our world.
            </Text>
            <TouchableOpacity 
              style={[styles.button, styles.redButton]}
              onPress={() => navigation.navigate('Team')}
            >
              <Text style={styles.buttonText}>Meet the Team</Text>
            </TouchableOpacity>
          </Animated.View>
          <Animated.Image
            entering={FadeInRight}
            source={teamImage}
            style={styles.sectionImage}
          />
        </View>

        {/* Map Section */}
        <View style={[styles.section, styles.altSection]}>
          <Animated.View 
            entering={FadeInRight}
            style={styles.sectionContent}
          >
            <Icon name="map-marker-radius" size={48} style={[styles.icon, styles.blueIcon]} />
            <Text style={styles.sectionTitle}>Global Presence</Text>
            <Text style={styles.sectionText}>
              Explore our worldwide network of heroes, ready to respond to any threat, anywhere.
            </Text>
            <TouchableOpacity 
              style={[styles.button, styles.blueButton]}
              onPress={() => navigation.navigate('Map')}
            >
              <Text style={styles.buttonText}>View Map</Text>
            </TouchableOpacity>
          </Animated.View>
          <Animated.Image
            entering={FadeInLeft}
            source={mapImage}
            style={styles.sectionImage}
          />
        </View>

        {/* Projects Section */}
        <View style={styles.section}>
          <Animated.View 
            entering={FadeInLeft}
            style={styles.sectionContent}
          >
            <Icon name="folder-multiple" size={48} style={[styles.icon, styles.yellowIcon]} />
            <Text style={styles.sectionTitle}>Our Projects</Text>
            <Text style={styles.sectionText}>
              Discover the innovative solutions and technologies developed by our team to protect Earth.
            </Text>
            <TouchableOpacity 
              style={[styles.button, styles.yellowButton]}
              onPress={() => navigation.navigate('Projects')}
            >
              <Text style={styles.buttonText}>View Projects</Text>
            </TouchableOpacity>
          </Animated.View>
          <Animated.Image
            entering={FadeInRight}
            source={projectsImage}
            style={styles.sectionImage}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  hero: {
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    position: 'relative',
  },
  characterGif: {
    width: 150,
    height: 150,
    position: 'absolute',
    zIndex: 20,
  },
  ironmanGif: {
    bottom: '50%',
    left: -150,
  },
  capGif: {
    bottom: -2,
    left: -150,
  },
  wandaGif: {
    bottom: '30%',
    left: 150,
  },
  heroContent: {
    position: 'relative',
    zIndex: 1,
    alignItems: 'center',
  },
  heroTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#DC2626',
    marginBottom: 8,
    textAlign: 'center',
  },
  heroSubtitle: {
    fontSize: 24,
    color: '#374151',
    marginTop: 16,
    opacity: 0.9,
    textAlign: 'center',
  },
  contentContainer: {
    paddingHorizontal: 16,
  },
  section: {
    paddingVertical: 40,
    flexDirection: 'column',
  },
  altSection: {
    backgroundColor: '#F9FAFB',
  },
  sectionContent: {
    flex: 1,
    marginBottom: 24,
  },
  icon: {
    width: 48,
    height: 48,
    marginBottom: 16,
    color: '#DC2626',
  },
  blueIcon: {
    color: '#3B82F6',
  },
  yellowIcon: {
    color: '#EAB308',
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 8,
  },
  sectionText: {
    fontSize: 16,
    color: '#374151',
    marginBottom: 16,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  redButton: {
    backgroundColor: '#DC2626',
  },
  blueButton: {
    backgroundColor: '#2563EB',
  },
  yellowButton: {
    backgroundColor: '#CA8A04',
  },
  sectionImage: {
    width: width - 32,
    height: 200,
    borderRadius: 8,
    resizeMode: 'cover',
  },
});

export default LandingPage;