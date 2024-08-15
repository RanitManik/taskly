import { ShoppingList } from "../components/ShoppingList";
import { StyleSheet, View } from "react-native";
import { theme } from "../theme";

export default function Index() {
    return (
        <View style={styles.container}>
            <ShoppingList item="Coffee" />
            <ShoppingList item="Tea" isCompleted />
            <ShoppingList item="Sugar" isCompleted />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colorWhite,
        justifyContent: "center",
    },
});
