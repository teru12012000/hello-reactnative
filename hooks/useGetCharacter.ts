import { getCharacter } from "@/model"
import useSWR from "swr"

export const useGetCharacter = (name: string) => {
    const { data, isLoading } = useSWR(
        `${process.env.EXPO_PUBLIC_API_PATH}/${name}`,
        (url: string) => getCharacter(name)
    )

    return {
        data,
        isLoading
    }
}
