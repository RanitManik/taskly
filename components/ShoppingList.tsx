import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { theme } from "../theme";

type Props = {
    item: string;
    isCompleted?: boolean;
};

export const ShoppingList = ({ item, isCompleted }: Props) => {
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
        <View
            style={[
                styles.itemContainer,
                isCompleted ? styles.completedContainer : null,
            ]}
        >
            <Text
                style={[
                    styles.itemText,
                    isCompleted ? styles.completedText : null,
                ]}
            >
                {item}
            </Text>
            <TouchableOpacity
                style={[
                    styles.button,
                    isCompleted ? styles.completedButton : null,
                ]}
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

    completedContainer: {
        backgroundColor: theme.colorLightGrey,
        borderBottomColor: theme.colorLightGrey,
    },

    itemText: {
        fontSize: 18,
        fontWeight: "200",
    },

    completedText: {
        textDecorationLine: "line-through",
        textDecorationColor: theme.colorGray,
        color: theme.colorGray,
    },

    button: {
        backgroundColor: theme.colorBlack,
        borderRadius: 6,
        paddingHorizontal: 16,
        paddingVertical: 8,
    },

    completedButton: {
        backgroundColor: theme.colorGray,
    },

    buttonText: {
        color: theme.colorWhite,
        fontWeight: "bold",
        textTransform: "uppercase",
        letterSpacing: 1,
    },
});
