import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Routes } from "./routes.enum";
import { SecondNavigator } from "./second.navigator";
import { FirstNavigator } from "./first.navigator";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

export function RootNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen options={{ header: () => null }} name={Routes.FirstNavigator} component={FirstNavigator}  />
                <Stack.Screen options={{ header: () => null, animation: "slide_from_bottom" }} name={Routes.SecondNavigator} component={SecondNavigator} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
