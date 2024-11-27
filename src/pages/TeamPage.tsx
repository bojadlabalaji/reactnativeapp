import React from 'react';
import { View, Text, StyleSheet, ScrollView, Animated } from 'react-native';
import MemberCard from '../components/MemberCard';
import { teamMembers } from '../data/teamMembers';

const TeamPage = () => {
  const fadeAnim = new Animated.Value(0);

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Animated.View style={[styles.content, { opacity: fadeAnim }]}>
        <Text style={styles.title}>Our Team</Text>
        <Text style={styles.subtitle}>
          Meet Earth's mightiest developers, united to create extraordinary applications.
        </Text>

        <View style={styles.teamGrid}>
          {teamMembers.map((member) => (
            <MemberCard key={member.id} member={member} />
          ))}
        </View>
      </Animated.View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
  },
  content: {
    padding: 16,
    paddingTop: 60,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#4b5563',
    textAlign: 'center',
    marginBottom: 24,
  },
  teamGrid: {
    flexDirection: 'column',
    gap: 16,
  },
});

export default TeamPage;
