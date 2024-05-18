import { useGetCharacter } from "@/hooks/useGetCharacter"
import { Stack, useNavigation } from "expo-router"
import { View, Text, Image, FlatList } from "react-native"
import styles from "./style.css"
import { useEffect, useState } from "react"

interface props {
    name: string
}

export const CharacterDetail = (props: props) => {
    const { data, isLoading } = useGetCharacter(props.name)

    console.log(data)

    const [viewData, setViewData] = useState<string[]>([])

    useEffect(() => {
        if (data) {
            setViewData([
                `name:${data.fullName}`,
                `nickname:${data.nickname}`,
                `hogwarts House:${data.hogwartsHouse}`,
                `birthday:${data.birthdate}`,
                `interpreted by:${data.interpretedBy}`
            ])
        }
    }, [data])

    return (
        <>
            <Stack.Screen
                options={{
                    title: props.name,
                    headerStyle: { backgroundColor: "#6e0ce3" },
                    headerTintColor: "#fff",
                    headerTitleStyle: {
                        fontWeight: "bold"
                    },
                    headerBackTitle: "Home"
                }}
            />
            {isLoading ? (
                <View>
                    <Text style={styles.loadingText}>Loading Now....</Text>
                </View>
            ) : (
                <View style={styles.container}>
                    <Image source={{ uri: data?.image }} style={styles.image} />
                    <FlatList
                        data={viewData}
                        renderItem={(item) => (
                            <Text style={styles.listText}>{item.item}</Text>
                        )}
                    />
                </View>
            )}
        </>
    )
}
