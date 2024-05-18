import { Stack, useNavigation } from "expo-router"
import { useEffect } from "react"
import { View, Text } from "react-native"

interface props {
    name: string
}

export const CharacterDetail = (props: props) => {
    const navigation = useNavigation()

    return (
        <>
            <Stack.Screen
                options={{
                    title: props.name,
                    headerStyle: { backgroundColor: "#6e0ce3" },
                    headerTintColor: "#fff",
                    headerTitleStyle: {
                        fontWeight: "bold"
                    }
                }}
            />
            <View>
                <Text style={{ color: "white" }}>{props.name}</Text>
            </View>
        </>
    )
}
