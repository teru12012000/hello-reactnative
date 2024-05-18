import { getAll } from "@/model"
import useSWR from "swr"

export const useGetAllCharacters = () => {
    const { data, isLoading } = useSWR(
        process.env.EXPO_PUBLIC_API_PATH as string,
        () => getAll()
    )

    return {
        data,
        isLoading
    }
}
