import { Text, View, StyleSheet } from "react-native";
import AppBar from "./appbar";
import ChatContent from "./chatContent";
export default function ChatApp() {
    return (
        <View style={styles.page}>
            <AppBar text={"Pizza"}/>
            <ChatContent />
        </View>
    );
}

const styles = StyleSheet.create({
    page: {
        backgroundColor: "#695ac2",
        height: "100%"
    }
})