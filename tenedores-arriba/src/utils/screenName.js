// this file centralizes the names of the screens in the application as objects.
// This allows to use the names of the screens in the tab navigator and avoid typos.
// The screen object is exported and imported in the AppNavigation.js file.

const restaurantStack = {
    //tab is the name of the screen and can not be duplicated 
    // in this case only one RestaurantsTab can exist.
    tab: "RestaurantsTab",
    //<stacck.Screen name={screen.restaurant.**restaurants**} ...
    restaurants: "Restaurants",
    addRestaurant: "AddRestaurant"
};
const favoriteStack = {
    tab: "FavoritesTab",
    favorites: "Favorites",
};
const searchStack = {
    tab: "SearchTab",
    search: "Search"
};
const accountStack = {
    tab: "AccountTab",
    account: "Account"
};
const rankingStack = {
    tab: "RankingTab",
    ranking: "Ranking"
};
//if its required 
export const screen = {
    restaurant: restaurantStack,
    favorite: favoriteStack,
    search: searchStack,
    account: accountStack,
    ranking: rankingStack

}