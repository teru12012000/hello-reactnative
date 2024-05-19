import { Link } from "expo-router"
import { View, Text, Image, ScrollView, Button, Pressable } from "react-native"
import styles from "./style.css"
import { useGetAllCharacters } from "@/hooks"

export const Home = () => {
    const { data, isLoading } = useGetAllCharacters()

    if (isLoading)
        return (
            <View style={styles.container}>
                <Text>Loading Now.....</Text>
            </View>
        )

    return (
        <>
            <View style={styles.container}>
                <View>
                    <Image
                        source={require("@/assets/images/backgroundImage.png")}
                        style={styles.titleImage}
                    />
                </View>
                <ScrollView style={styles.scrollBox}>
                    {data?.map((item, index) => (
                        <View key={index}>
                            <Image
                                source={{ uri: item.image }}
                                style={{ width: 105 * 1.5, height: 150 }}
                            />
                            <View style={styles.buttonBox}>
                                <Link href={`/detail/${item.fullName}`} asChild>
                                    <Pressable style={styles.button}>
                                        <Text style={styles.buttonFont}>
                                            Go To Detail
                                        </Text>
                                    </Pressable>
                                </Link>
                            </View>
                        </View>
                    ))}
                </ScrollView>
                <View style={styles.bottomStyle} />
            </View>
        </>
    )
}
