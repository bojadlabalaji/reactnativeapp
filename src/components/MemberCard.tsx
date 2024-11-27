import React from 'react';
import { View, Text, Image, StyleSheet, Pressable, ScrollView } from 'react-native';
import type { TeamMember } from '../data/teamMembers';

interface MemberCardProps {
  member: TeamMember;
}

const MemberCard: React.FC<MemberCardProps> = ({ member }) => {
  return (
    <View style={styles.card}>
      {/* Top Section */}
      <View style={styles.topSection}>
        <Image
          source={{ uri: member.profile }}
          style={styles.profileImage}
        />
        <Text style={styles.name}>{member.name}</Text>
        <Text style={styles.title}>{member.title}</Text>
        
        {/* Social Links & Location Row */}
        <View style={styles.socialRow}>
          {member.location && (
            <View style={styles.locationContainer}>
              <Text style={styles.locationText}>{member.location.name}</Text>
            </View>
          )}
        </View>
      </View>

      {/* Middle Section */}
      <ScrollView style={styles.middleSection}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Skills</Text>
          <View style={styles.tagsContainer}>
            {member.skills.map((skill) => (
              <View key={skill} style={styles.skillTag}>
                <Text style={styles.tagText}>{skill}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Interests</Text>
          <View style={styles.tagsContainer}>
            {member.interests.map((interest) => (
              <View key={interest} style={styles.interestTag}>
                <Text style={styles.tagText}>{interest}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  topSection: {
    alignItems: 'center',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  title: {
    fontSize: 16,
    color: '#666',
    marginBottom: 16,
  },
  socialRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 24,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    marginLeft: 4,
    color: '#666',
  },
  middleSection: {
    flex: 1,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 12,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  skillTag: {
    backgroundColor: '#EBF5FF',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  interestTag: {
    backgroundColor: '#E6F4EA',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  tagText: {
    fontSize: 14,
    color: '#333',
  },
});

export default MemberCard;