import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 100
    },
    scrollBox: {
        width: 270
    },
    buttonBox: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    imageBox: {
        flex: 1,
        justifyContent: "center"
    },
    image: {
        width: 105 * 1.5,
        height: 150
    },
    button: {
        width: 100,
        height: 25,
        backgroundColor: "white",
        marginTop: 5,
        marginBottom: 5,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 4
    },
    buttonFont: {
        color: "black"
    }
})

export default styles
