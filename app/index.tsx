import { ShoppingListItem } from "../components/ShoppingListItem";
import { ScrollView, StyleSheet, TextInput, View } from "react-native";
import { theme } from "../theme";
import { useState } from "react";

type ShoppingListItemType = {
    id: string;
    name: string;
};
const initialList: ShoppingListItemType[] = [
    { id: "1", name: "coffee" },
    { id: "2", name: "Tea" },
    { id: "3", name: "Sugar" },
];

export default function Index() {
    const [value, setValue] = useState("");
    const [shoppingList, setShoppingList] =
        useState<ShoppingListItemType[]>(initialList);

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
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.contentContainer}
            stickyHeaderIndices={[0]}
        >
            <TextInput
                placeholder="E.g. coffee"
                style={styles.textInput}
                onChangeText={setValue}
                returnKeyType="done"
                value={value}
                onSubmitEditing={handleSubmit}
            />
            {shoppingList.map((item) => (
                <ShoppingListItem name={item.name} key={item.id} />
            ))}
        </ScrollView>
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
});
