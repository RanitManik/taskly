import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { theme } from "../theme";
import AntDesign from "@expo/vector-icons/AntDesign";

type Props = {
    name: string;
    isCompleted?: boolean;
};

export const ShoppingListItem = ({ name, isCompleted }: Props) => {
    const handleDelete = () => {
        Alert.alert(
            `are you sure you want to delete ${name}?`,
            "it will be gone for good.",
            [
                {
                    text: "yes",
                    onPress: () => console.log(`${name} deleted`),
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
                {name}
            </Text>
            <TouchableOpacity activeOpacity={0.8} onPress={handleDelete}>
                <AntDesign
                    name="closecircle"
                    size={24}
                    color={isCompleted ? theme.colorGray : theme.colorRed}
                />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        borderBottomWidth: 1,
        borderBottomColor: theme.colorCerulean,
        paddingHorizontal: 18,
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
});
