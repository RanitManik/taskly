import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { theme } from "./theme";

export default function App() {
    const handleDelete = () => {
        Alert.alert(
            "are you sure you want to delete this item?",
            "it will be gone for good.",
            [
                {
                    text: "yes",
                    onPress: () => console.log("deleted"),
                    style: "destructive",
                },
                {
                    text: "cancel",
                    style: "cancel",
                },
            ],
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.itemContainer}>
                <Text style={styles.itemText}>Coffee</Text>
                <TouchableOpacity
                    style={styles.button}
                    activeOpacity={0.8}
                    onPress={handleDelete}
                >
                    <Text style={styles.buttonText}>Delete</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colorWhite,
        justifyContent: "center",
    },

    itemContainer: {
        borderBottomWidth: 1,
        borderBottomColor: theme.colorCerulean,
        paddingHorizontal: 8,
        paddingVertical: 16,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    itemText: {
        fontSize: 18,
        fontWeight: "200",
    },

    button: {
        backgroundColor: theme.colorBlack,
        borderRadius: 6,
        paddingHorizontal: 16,
        paddingVertical: 8,
    },

    buttonText: {
        color: theme.colorWhite,
        fontWeight: "bold",
        textTransform: "uppercase",
        letterSpacing: 1,
    },
});
