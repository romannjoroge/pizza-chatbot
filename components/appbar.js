import { Image, Text, View, StyleSheet } from "react-native";

export default function AppBar({text}) {
    return (
        <View style={styles.app_bar}>
            <Image source={require("../assets/pizza.jpg")} style={styles.app_bar_logo}></Image>
            <Text style={styles.app_bar_text}>{text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    app_bar_logo: {
        width: 40,
        height: 40,
        borderRadius: 50
    },
    app_bar: {
        marginTop: 50,
        padding: 20,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#695ac2"
    },
    app_bar_text: {
        textAlign: "center",
        width: "100%",
        color: "white"
    }
});