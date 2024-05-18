import { CharacterDetail } from "@/view/characterDetail"
import { useLocalSearchParams } from "expo-router"
import { Text, View } from "react-native"

const Character = () => {
    const { character } = useLocalSearchParams()
    return <CharacterDetail name={character as string} />
}

export default Character
