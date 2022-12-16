// React Native
import { View, Text, StyleSheet } from "react-native"

export default function Subtitle({ children }) {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subTitle}>{children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    subTitle: {
        color: "#e2b497",
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
        
    },
    subtitleContainer:{
        padding: 6,
        marginHorizontal: 12,
        marginVertical: 4,
        borderBottomColor: "#e2b497",
        borderBottomWidth: 2
        
    }
})
