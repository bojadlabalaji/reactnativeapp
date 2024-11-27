import React, { useEffect } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Animated, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/Feather'; // For Clock and Rocket icons

const projects = [
  {
    id: 1,
    title: "Pomodoro Timer",
    description: "A productivity tool designed to help users maintain focus and manage time effectively using the Pomodoro Technique. Features customizable time intervals, break reminders, and progress tracking.",
    image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=800&auto=format&fit=crop&q=60",
    status: "Completed",
    link: "https://bojadlabalaji.github.io/pomodoro-app/",
    features: [
      "Customizable time intervals",
      "Break reminders",
      "Progress tracking",
      "Task Repeater"
    ]
  }
];

const ProjectsPage = () => {
  const fadeAnim = new Animated.Value(0);
  const translateY = new Animated.Value(20);

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(translateY, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Animated.View
          style={[
            styles.header,
            {
              opacity: fadeAnim,
              transform: [{ translateY }],
            },
          ]}
        >
          <Text style={styles.title}>Our Projects</Text>
          <Text style={styles.subtitle}>
            Innovative solutions developed by Earth's mightiest developers.
          </Text>
        </Animated.View>

        {projects.map((project) => (
          <Animated.View
            key={project.id}
            style={[
              styles.projectCard,
              {
                opacity: fadeAnim,
                transform: [{ translateY }],
              },
            ]}
          >
            <Image
              source={{ uri: project.image }}
              style={styles.projectImage}
            />
            <View style={styles.projectContent}>
              <View style={styles.projectHeader}>
                <Text style={styles.projectTitle}>{project.title}</Text>
                <TouchableOpacity
                  style={styles.viewButton}
                  onPress={() => Linking.openURL(project.link)}
                >
                  <Text style={styles.viewButtonText}>View Project</Text>
                </TouchableOpacity>
              </View>

              <Text style={styles.description}>{project.description}</Text>

              <View style={styles.statusContainer}>
                <Icon name="clock" size={20} color="#ef4444" />
                <Text style={styles.statusText}>Status: {project.status}</Text>
              </View>

              <View style={styles.featuresSection}>
                <View style={styles.featuresHeader}>
                  <Icon name="rocket" size={20} color="#000" />
                  <Text style={styles.featuresTitle}>Key Features</Text>
                </View>

                <View style={styles.featuresList}>
                  {project.features.map((feature, index) => (
                    <View key={index} style={styles.featureItem}>
                      <View style={styles.featureDot} />
                      <Text style={styles.featureText}>{feature}</Text>
                    </View>
                  ))}
                </View>
              </View>
            </View>
          </Animated.View>
        ))}
      </View>
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
  header: {
    alignItems: 'center',
    marginBottom: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: '#4b5563',
    textAlign: 'center',
  },
  projectCard: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  projectImage: {
    width: '100%',
    height: 200,
  },
  projectContent: {
    padding: 16,
  },
  projectHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  projectTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
  },
  viewButton: {
    backgroundColor: '#ef4444',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  viewButtonText: {
    color: '#ffffff',
    fontWeight: '600',
  },
  description: {
    color: '#4b5563',
    marginBottom: 16,
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  statusText: {
    marginLeft: 8,
    color: '#4b5563',
  },
  featuresSection: {
    marginTop: 8,
  },
  featuresHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  featuresTitle: {
    marginLeft: 8,
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
  },
  featuresList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '50%',
    marginBottom: 8,
  },
  featureDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#ef4444',
    marginRight: 8,
  },
  featureText: {
    color: '#4b5563',
  },
});

export default ProjectsPage;