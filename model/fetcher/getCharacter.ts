import { HPType } from "./types"

export const getCharacter = async (name: string): Promise<HPType> => {
    const res = await fetch(
        `${process.env.EXPO_PUBLIC_API_PATH}?search=${name}`
    )

    const data: HPType = (await res.json())[0]

    return data
}
