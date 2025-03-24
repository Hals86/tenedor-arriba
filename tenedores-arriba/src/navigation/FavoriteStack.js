import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FavoriteScreen } from "../screens/FavoriteScreen";
import { screen } from "../utils";

const Stack = createNativeStackNavigator();
export function FavoriteStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={screen.favorite.favorites}
                component={FavoriteScreen}
                options={{ title: "Favorites" }}
            />
        </Stack.Navigator>
    );
}