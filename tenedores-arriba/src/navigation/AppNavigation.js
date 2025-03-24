import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { screen } from "../utils";
import { RestaurantStack } from "./RestaurantStack"
import { FavoriteStack } from "./FavoriteStack";
import { AccountStack } from "./AccountStack";
import { RankingStack } from "./RankingStack";
import { SearchStack } from "./SearchStack";
import { Icon } from "react-native-elements";


const tab = createBottomTabNavigator();
export function AppNavigation() {
    return (
        //tab.navigator works as navigator container
        //screenOptions is a prop that allows to customize appereance and behavior the tab navigator
        //Accepts a function that receives a route parameter via destructuring ({ route })

        <tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,//hide the header
                tabBarActiveTintColor: "#00a680",//color of the active tab passed as prop {color}
                tabBarInactiveTintColor: "#646494",//color of the inactive tab passed as prop {color}
                tabBarIcon: ({ color, size }) => tabBarOptions(route, color, size)
                //
            })}>

            <tab.Screen
                name={screen.restaurant.tab}
                component={RestaurantStack}
                options={{ title: "Restaurants" }}
            />

            <tab.Screen
                name={screen.favorite.tab}
                component={FavoriteStack}
                options={{ title: "Favorites" }}
            />
            <tab.Screen
                name={screen.search.tab}
                component={SearchStack}
                options={{ title: "Search" }}
            />
            <tab.Screen
                name={screen.account.tab}
                component={AccountStack}
                options={{ title: "Account" }}
            />
            <tab.Screen
                name={screen.ranking.tab}
                component={RankingStack}
                options={{ title: "Ranking" }}
            />
        </tab.Navigator>

    );
}
//function used to pass the color, size, route automatically to each screen on the tab bar.
function tabBarOptions(route, color, size) {
    let iconName;
    if (route.name === screen.restaurant.tab) {
        iconName = "compass-outline";
    }
    if (route.name === screen.favorite.tab) {
        iconName = "heart-outline";
    }
    if (route.name === screen.search.tab) {
        iconName = "magnify";
    }
    if (route.name === screen.account.tab) {
        iconName = "home-outline";
    }
    if (route.name === screen.ranking.tab) {
        iconName = "star-outline";
    }

    return (
        <Icon type="material-community" name={iconName} color={color} size={size} />
    )
}
