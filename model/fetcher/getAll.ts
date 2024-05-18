import { HPType } from "./types"

export const getAll = async (): Promise<HPType[]> => {
    const res = await fetch(process.env.EXPO_PUBLIC_API_PATH as string)

    const data: HPType[] = (await res.json()) as HPType[]

    return data
}
