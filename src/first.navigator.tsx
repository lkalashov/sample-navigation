import React, { useCallback } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Routes } from "./routes.enum";

const Stack = createNativeStackNavigator();

export function FirstNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Source screen" component={SourceScreen} />
        </Stack.Navigator>
    );
}

function SourceScreen() {
    const navigation = useNavigation();
    const navigateToDestinationScreen = useCallback(() => {
        navigation.navigate(Routes.SecondNavigator);
    }, []);

    return (
        <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
            <TouchableOpacity
                style={{
                    height: 50,
                    borderColor: "black",
                    borderWidth: 2,
                    alignItems: "center",
                    justifyContent: "center",
                    paddingHorizontal: 20,
                }}
                onPress={navigateToDestinationScreen}
            >
                <Text>Navigate to destination screen</Text>
            </TouchableOpacity>
        </View>
    );
}
