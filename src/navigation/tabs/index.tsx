import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Search, Plus, MessageCircle, ClipboardList } from 'lucide-react-native';
import { colors } from '../../styles/colors';

import Discover from '../../screens/Discover';
import SearchScreen from '../../screens/Search';
import CreateItemScreen from '../../screens/CreateItem';
import ChatsScreen from '../../screens/Chats';
import RequestsScreen from '../../screens/Requests';

const Tab = createBottomTabNavigator();

const MainTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textSecondary,
      }}
    >
      <Tab.Screen 
        name="Feed" 
        component={Discover} 
        options={{
          tabBarIcon: ({ color, size }) => <Home color={color} size={size} />
        }}
      />
      <Tab.Screen 
        name="Search" 
        component={SearchScreen} 
        options={{
          tabBarIcon: ({ color, size }) => <Search color={color} size={size} />
        }}
      />
      
      {/* Botão de Cadastro Centralizado com Destaque */}
      <Tab.Screen 
        name="CreateItem" 
        component={CreateItemScreen} 
        options={{
          tabBarIcon: () => (
            <View style={styles.createButtonContainer}>
              <View style={styles.createButton}>
                <Plus color={colors.light} size={28} strokeWidth={3} />
              </View>
            </View>
          )
        }}
      />

      <Tab.Screen 
        name="Chats" 
        component={ChatsScreen} 
        options={{
          tabBarIcon: ({ color, size }) => <MessageCircle color={color} size={size} />
        }}
      />
      <Tab.Screen 
        name="Requests" 
        component={RequestsScreen} 
        options={{
          tabBarIcon: ({ color, size }) => <ClipboardList color={color} size={size} />
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#fff',
    borderTopWidth: 0,
    elevation: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: -2 },
    shadowRadius: 10,
    height: 70,
  },
  createButtonContainer: {
    top: -20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  createButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: colors.primary,
    shadowOpacity: 0.4,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 5,
  }
});

export default MainTabs;
