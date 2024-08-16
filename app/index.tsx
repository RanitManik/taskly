import { ShoppingListItem } from "../components/ShoppingListItem";
import { FlatList, StyleSheet, TextInput, View, Text } from "react-native";
import { theme } from "../theme";
import { useState } from "react";

type ShoppingListItemType = {
    id: string;
    name: string;
};

export default function Index() {
    const [value, setValue] = useState("");
    const [shoppingList, setShoppingList] = useState<ShoppingListItemType[]>(
        [],
    );

    const handleSubmit = () => {
        if (value) {
            const newShoppingList = [
                { id: new Date().toTimeString(), name: value },
                ...shoppingList,
            ];
            setShoppingList(newShoppingList);
            setValue("");
        }
    };

    return (
        <FlatList
            data={shoppingList}
            style={styles.container}
            contentContainerStyle={styles.contentContainer}
            stickyHeaderIndices={[0]}
            ListEmptyComponent={
                <View style={styles.listEmptyContainer}>
                    <Text>Your shopping list is empty</Text>
                </View>
            }
            ListHeaderComponent={
                <TextInput
                    placeholder="E.g. coffee"
                    style={styles.textInput}
                    onChangeText={setValue}
                    returnKeyType="done"
                    value={value}
                    onSubmitEditing={handleSubmit}
                />
            }
            renderItem={({ item }) => <ShoppingListItem name={item.name} />}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colorWhite,
        padding: 12,
    },

    contentContainer: {
        paddingBottom: 24,
    },

    textInput: {
        borderColor: theme.colorLightGrey,
        borderWidth: 2,
        padding: 12,
        marginHorizontal: 12,
        marginBottom: 12,
        fontSize: 18,
        borderRadius: 50,
        backgroundColor: theme.colorWhite,
    },

    listEmptyContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 18,
    },
});
