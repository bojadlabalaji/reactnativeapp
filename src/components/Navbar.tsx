import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Image, Animated, StyleSheet, Text } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Shield, Map, Users, FolderKanban, Sun, Moon, Menu, X } from 'lucide-react-native';
import { useTheme } from '../context/ThemeContext';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  Map: undefined;
  Team: undefined;
  Projects: undefined;
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const route = useRoute();

  const navItems = [
    { path: 'Home' as keyof RootStackParamList, icon: Shield, label: 'Home' },
    { path: 'Map' as keyof RootStackParamList, icon: Map, label: 'Map' },
    { path: 'Team' as keyof RootStackParamList, icon: Users, label: 'Team' },
    { path: 'Projects' as keyof RootStackParamList, icon: FolderKanban, label: 'Projects' },
  ] as const;

  return (
    <View style={[
      styles.container,
      { backgroundColor: isDarkMode ? '#111827CC' : '#FFFFFFCC' }
    ]}>
      <View style={styles.navbar}>
        {/* Logo Section */}
        <TouchableOpacity 
          onPress={() => navigation.navigate('Home')}
          style={styles.logoContainer}
        >
          <Image
            source={require('../images/logo.png')}
            style={styles.logo}
          />
        </TouchableOpacity>

        {/* Navigation Links - Visible on larger screens */}
        <View style={styles.navLinksContainer}>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = route.name === item.path;
            return (
              <TouchableOpacity
                key={item.path}
                onPress={() => navigation.navigate(item.path)}
                style={styles.navItem}
              >
                <Icon
                  size={20}
                  color={isActive ? '#DC2626' : isDarkMode ? '#D1D5DB' : '#374151'}
                />
                <Text style={[
                  styles.navText,
                  { color: isActive ? '#DC2626' : isDarkMode ? '#D1D5DB' : '#374151' }
                ]}>
                  {item.label}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Theme Toggle */}
        <TouchableOpacity
          onPress={toggleTheme}
          style={styles.themeToggle}
        >
          {isDarkMode ? (
            <Sun size={24} color="#F59E0B" />
          ) : (
            <Moon size={24} color="#374151" />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 999,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  navbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 8,
    height: 64,
  },
  logoContainer: {
    opacity: 0.8,
  },
  logo: {
    height: 40,
    width: 40,
    resizeMode: 'contain',
  },
  navLinksContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginHorizontal: 8,
  },
  navText: {
    marginLeft: 8,
    fontSize: 14,
    fontWeight: '500',
  },
  themeToggle: {
    padding: 8,
    borderRadius: 20,
  },
});

export default Navbar;