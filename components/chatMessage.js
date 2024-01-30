import { Text, View, StyleSheet } from "react-native";
import { makeStyles } from '@rneui/themed'

export default function ChatMessage(props) {
    const styles = useStyles(props);
    return (
        <View style={styles.container} >
            <View style={styles.message} >
                <Text style={styles.messageText} >
                    {props.chat}
                </Text>
            </View>
            {/* <View style={styles.timeContainer} >
                <Text style={styles.timeText} >
                    {props.time}
                </Text>
            </View> */}
        </View>
    );
}

const useStyles = makeStyles((theme, props)=>{
    return {
        container: {
            alignItems: props.sender ? "flex-end" : "flex-start",
        },
        message: {
            backgroundColor: props.sender ? "white" : "#695ac2",
            paddingVertical: 10,
            paddingHorizontal: 15,
            borderRadius: 15,
            borderWidth: props.sender ? 2 : 0,
            borderColor: "#695ac2",
        },
        messageText: {
            fontSize: 16,
            color: props.sender ? "#695ac2" : "white",
            textAlign: "left",
            lineHeight: 21,
            fontWeight:  '400'
        },
    }
})