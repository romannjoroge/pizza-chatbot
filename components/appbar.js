import { Image, Text, View } from "react-native";

export default function AppBar({text}) {
    return (
        <View>
            <Image source={require("./assets/pizza.jpg")}></Image>
            <Text>{text}</Text>
        </View>
    );
}