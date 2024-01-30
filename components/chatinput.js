import { StyleSheet, KeyboardAvoidingView, TouchableOpacity, View } from "react-native";
import { Icon, Input } from '@rneui/themed';

export default function ChatInput() {
    return (
        <KeyboardAvoidingView style={styles.container} >
            <View style={styles.chatContainer} >
                <Input 
                    placeholder="name"
                />
            </View>
            
            <TouchableOpacity style={styles.sendButton}>
                <Icon
                    name="send"
                    size={24}
                    color="white"
                />
            </TouchableOpacity>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: "white",
        borderRadius: 15,
        padding: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 20
    },
    chatContainer: {
        height: 40,
        width: "80%"
    },
    sendButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: "#695ac2",
        alignItems: "center",
        justifyContent: "center",
    }
});