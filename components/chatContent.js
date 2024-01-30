import { FlatList, Text, View, StyleSheet } from "react-native";
import React, {useState} from "react";
import ChatMessage from "./chatMessage";
import ChatInput from "./chatinput";

// {
//     sender: Boolean,
//     chat: String
// }

export default function ChatContent() {
    const [chat, setChat] = useState([
        {
            sender: true,
            chat: "Test 123"
        },
        {
            sender: false,
            chat: "I am a robot"
        }
    ]);

    return (
        <View style={styles.chat_page}>
            <View style={styles.chats}>
                <FlatList
                    data={chat}
                    renderItem={({item}) => <ChatMessage sender={item.sender} chat={item.chat} />}
                />
            </View>
            <ChatInput style={styles.chat_input}/>
        </View>
    );
}

const styles = StyleSheet.create({
    chat_page: {
        backgroundColor: "white",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        height: "100%",
        padding: 20,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around"
    },
    chats: {
        flex: 1
    },
    chat_input: {
        height: 50
    }
})