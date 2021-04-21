import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  AsyncStorage
} from 'react-native';

import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

import Splash from './src/Splash';
import Login from './src/Login';
import AdminShout from './src/AdminShout';
import UserHome from './src/UserHome';
import UserShout from './src/UserShout';
import AdminHomePage from './src/AdminHomePage';


const AdminHomeNavigator = createStackNavigator({
  'AdminHomePage': {
    screen: AdminHomePage,
    navigationOptions: ({navigation}) => ({
      headerLeft: () => (
        <TouchableOpacity
          style={{marginLeft: 20}}
          onPress={() => navigation.toggleDrawer()}>
          <Icon name="menu" size={12} />
        </TouchableOpacity>
      ),
    }),
  },
});

const LoginNavigator = createStackNavigator({
  'Login': {
    screen: Login,
    navigationOptions: ({navigation}) => ({
      headerLeft: () => (
        <TouchableOpacity
          style={{marginLeft: 20}}
          onPress={() => navigation.toggleDrawer()}>
          <Icon name="menu" size={12} />
        </TouchableOpacity>
      ),
    }),
  },
});

const AdminShoutNavigator = createStackNavigator({
  'Admin Shout': {
    screen: AdminShout,
    navigationOptions: ({navigation}) => ({
      headerLeft: () => (
        <TouchableOpacity
          style={{marginLeft: 20}}
          onPress={() => navigation.toggleDrawer()}>
          <Icon name="menu" size={12} />
        </TouchableOpacity>
      ),
    }),
  },
});

const UserHomeNavigator = createStackNavigator({
  'User Home': {
    screen: UserHome,
    navigationOptions: ({navigation}) => ({
      headerLeft: () => (
        <TouchableOpacity
          style={{marginLeft: 20}}
          onPress={() => navigation.toggleDrawer()}>
          <Icon name="menu" size={12} />
        </TouchableOpacity>
      ),
    }),
  },
});

const UserShoutNavigator = createStackNavigator({
  'User Shout': {
    screen: UserShout,
    navigationOptions: ({navigation}) => ({
      headerLeft: () => (
        <TouchableOpacity
          style={{marginLeft: 20}}
          onPress={() => navigation.toggleDrawer()}>
          <Icon name="menu" size={12} />
        </TouchableOpacity>
      ),
    }),
  },
});


const DrawerNavigatorAdmin = createDrawerNavigator({
  AdminHomePage: {
    navigationOptions: {
      drawerIcon: (
        <Image
          source={{uri: 'asset:/icons/home.png'}}
          style={{width: 21, height: 21}}
        />
      ),
      drawerLabel: 'Admin Home',
    },
    screen: AdminHomeNavigator,
  },

  AdminShout: {
    navigationOptions: {
      drawerIcon: (
        <Image
          source={{uri: 'asset:/icons/home.png'}}
          style={{width: 21, height: 21}}
        />
      ),
      drawerLabel: 'Admin Shout',
    },
    screen: AdminShoutNavigator,
  },
})

const DrawerNavigatorUser = createDrawerNavigator({
  UserHome: {
    navigationOptions: {
      drawerIcon: (
        <Image
          source={{uri: 'asset:/icons/home.png'}}
          style={{width: 21, height: 21}}
        />
      ),
      drawerLabel: 'User Home',
    },
    screen: UserHomeNavigator,
  },

  UserShout: {
    navigationOptions: {
      drawerIcon: (
        <Image
          source={{uri: 'asset:/icons/home.png'}}
          style={{width: 21, height: 21}}
        />
      ),
      drawerLabel: 'User Shout',
    },
    screen: UserShoutNavigator,
  },
})


const AppSwitchNavigator = createSwitchNavigator(
  {
    Splash: {screen: Splash},
    Login: {screen: Login},
    Drawer1: {screen: DrawerNavigatorAdmin},
    Drawer2: {screen: DrawerNavigatorUser},
  },
  {
    initialRouteName: 'Splash',
  },
);

const App = createAppContainer(AppSwitchNavigator);

export default App;