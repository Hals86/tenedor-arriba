//createStackNavigator es un componente de navegación que se utiliza para navegar entre pantallas en React Native.
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { screen } from "../utils"
import { RestaurantScreen } from '../screens/Restaurants/RestaurantScreen';
import { AddRestaurantScreen } from '../screens/Restaurants/AddRestaurantScreen';

const Stack = createNativeStackNavigator();

export function RestaurantStack() {
    return (
        //Stack.Navigator works as a container for the stack navigator
        //Stack.Screen is used to define the screens that will be part of the stack navigator
        //name is the name of the screen and can not be duplicated (restaurant=scrrenName.js stack1 
        //and AddRestaurants=scrrenName.js stack2) 
        <Stack.Navigator>
            <Stack.Screen
                name={screen.restaurant.restaurants}
                component={RestaurantScreen}
                options={{ title: "Restaurants" }}
            />
            <Stack.Screen
                name={screen.restaurant.addRestaurant}
                component={AddRestaurantScreen}
                options={{ title: "New Restaurant" }}
            />

        </Stack.Navigator>
    );
}