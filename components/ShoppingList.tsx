import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { theme } from "../theme";

type Props = {
    item: string;
};

export const ShoppingList = ({ item }: Props) => {
    const handleDelete = () => {
        Alert.alert(
            `are you sure you want to delete ${item}?`,
            "it will be gone for good.",
            [
                {
                    text: "yes",
                    onPress: () => console.log(`${item} deleted`),
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
        <View style={styles.itemContainer}>
            <Text style={styles.itemText}>{item}</Text>
            <TouchableOpacity
                style={styles.button}
                activeOpacity={0.8}
                onPress={handleDelete}
            >
                <Text style={styles.buttonText}>Delete</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
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
