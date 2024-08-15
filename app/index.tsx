import { ShoppingList } from "../components/ShoppingList";
import { StyleSheet, View } from "react-native";
import { theme } from "../theme";
import { Link } from "expo-router";

export default function Index() {
    return (
        <View style={styles.container}>
            <Link
                href="/counter"
                style={{ textAlign: "center", marginBottom: 18, fontSize: 24 }}
            >
                Go to counter
            </Link>
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
