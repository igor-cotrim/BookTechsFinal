import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { BookList, BookDetails } from "../components";

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#8257e6" },
        headerTitleAlign: "center",
        headerTintColor: "#fff",
      }}
    >
      <Stack.Screen name="Home" component={BookList} />
      <Stack.Screen name="Detalhes" component={BookDetails} />
    </Stack.Navigator>
  );
};

export default Navigation;
