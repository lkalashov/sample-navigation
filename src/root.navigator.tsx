import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Routes } from "./routes.enum";
import { SecondNavigator } from "./second.navigator";
import { FirstNavigator } from "./first.navigator";
import { DarkTheme, NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

export function RootNavigator() {
    return (
        <NavigationContainer theme={DarkTheme}>
            <Stack.Navigator screenOptions={{ header: () => null }}>
                <Stack.Screen name={Routes.FirstNavigator} component={FirstNavigator} />
                <Stack.Screen
                    options={{ animation: "slide_from_bottom", presentation: "containedModal" }}
                    name={Routes.SecondNavigator}
                    component={SecondNavigator}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
