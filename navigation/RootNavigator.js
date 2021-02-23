import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import DashboardScreen from "../screens/DashboardScreen";
import AboutScreen from "../screens/AboutScreen";
import ProjectsScreen from "../screens/ProjectsScreen";
import ContactScreen from "../screens/ContactScreen";
import AddProjects from "../screens/AddProjectsScreen";
import AdminContact from "../screens/AdminContactScreen";

import ProjectDetails from "../screens/ProjectDetailsScreen";
import SignIn from "../screens/SignInScreen";
import * as Linking from "expo-linking";

export default function RootNavigator() {
  const Stack = createStackNavigator();
  const linking = {
    prefixes: ["https://elite-terminal-services.firebaseapp.com", "elite://"],
    config: {
      screens: {
        DashboardScreen: "",
        AboutScreen: ":id/about",
        ContactScreen: ":id/contact",
        ProjectsScreen: ":id/projects",
        ProjectDetails: ":id/project-details",
        SignIn: ":id/admin"
      }
    }
  };
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator headerMode="none" initialRouteName="DashboardScreen">
        <Stack.Screen name="DashboardScreen" component={DashboardScreen} />
        <Stack.Screen name="AboutScreen" component={AboutScreen} />
        <Stack.Screen name="ProjectsScreen" component={ProjectsScreen} />
        <Stack.Screen name="ProjectDetails" component={ProjectDetails} />

        <Stack.Screen name="ContactScreen" component={ContactScreen} />
        <Stack.Screen name="AddProjects" component={AddProjects} />
        <Stack.Screen name="AdminContact" component={AdminContact} />

        <Stack.Screen name="SignIn" component={SignIn} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
