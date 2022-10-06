import React, { useCallback } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, TouchableOpacity, FlatList, RefreshControl } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Routes } from "./routes.enum";

const Stack = createNativeStackNavigator();

export function SecondNavigator() {
    return (
        <Stack.Navigator screenOptions={{ header: () => null }}>
            <Stack.Screen name="Destination screen" component={DestinationScreen} />
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
            <View style={{ height: 100, justifyContent: "center", alignItems: "center" }}>
                <Text style={{ color: "white", fontSize: 24 }}>Destination Screen</Text>
            </View>
            <FlatList
                data={Array(100).fill("Flatlist sample element") as string[]}
                renderItem={item => <Text style={{ color: "white", marginVertical: 10 }}>{item.item}</Text>}
                keyExtractor={(item, index) => index.toString()}
                ListHeaderComponent={
                    <TouchableOpacity
                        style={{
                            height: 50,
                            borderColor: "red",
                            borderWidth: 2,
                            alignItems: "center",
                            justifyContent: "center",
                            paddingHorizontal: 20,
                            backgroundColor: "white",
                        }}
                        onPress={navigateToSourceScreen}
                    >
                        <Text>Back to source screen</Text>
                    </TouchableOpacity>
                }
                refreshControl={<RefreshControl refreshing={false} onRefresh={() => Promise.resolve()} colors={["transparent"]} tintColor="transparent" />}
            />
        </View>
    );
}
