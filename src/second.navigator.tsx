import React, { useCallback } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Routes } from "./routes.enum";

const Stack = createNativeStackNavigator();

export function SecondNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Destination screen" component={DestinationScreen} options={{ animation: "slide_from_bottom" }} />
        </Stack.Navigator>
    );
}

function DestinationScreen() {
    const navigation = useNavigation();
    const navigateToSourceScreen = useCallback(() => {
        navigation.navigate(Routes.FirstNavigator);
    }, [navigation]);

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
                onPress={navigateToSourceScreen}
            >
                <Text>Back to source screen</Text>
            </TouchableOpacity>
        </View>
    );
}
