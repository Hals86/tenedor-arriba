# Tenedores Arriba
 This document conntains a summary of the project structure folder contents and a bief explanation of the files inside the folder 

 ## Src
 Is the main folder and contains the main source code for the app.
 `Files inside Src`=> **App.js**; REnders the **AppNAvigation** commponent which renders the app's screens, **package.json** contains the dependdecies used for the project.
 ### Navigation
`AppNAvigation`
refer to 5/35-5/36
 ### Screens
 contains all screens used for the project.
refer to 4/29, 4/32

**STACK** => group of routes (pages) taht will be managed by a single <Tab.Screen>
EX: `src/screens/restaurants` will contain all restaurant screens, such as addRestaurantScreen.js, RestaurantScreen.js, favoritesRestaurant.js, etc.
`navigation "RestaurantSTack.js"`
<Stack.Navigator>
groups all of the
 <Stack.Screen> this screens are all the screens that will be managed by <Tab.Screen>

    Every group of screens should have their own screen in this case (Restaurants, )
Each file is a different view under the restaurant <tab.screen>
 this views are managed by `RestaurantStack.js `this file contins the imports from `utils/screenName "screenName.js"`
> to show only one title must be selected the one from restaurant stack to do so on <Tab.Screen>options {headerShown:false } hides the title comming from <Tab.Screen>
 ### utils
 its necesary to centrralize the screen names by creating a file using object for each screen 
 refer to 5/37
```
const restaurantStack = {
    //tab is the name of the screen and can not be duplicated 
    // in this case only one RestaurantsTab can exist.
    tab: "RestaurantsTab"
};
```
 **screens**

`view`=>The most fundamental component for building a UI, View is a container that supports layout with flexbox, style, some touch handling, and accessibility controls. View maps directly to the native view equivalent on whatever platform React Native is running on, whether that is a UIView, <div>, android.view, etc.
`text` => Text supports nesting, styling, and touch handling.

**navigation**
`AppNavigation.js` main navigation for the app

**Firebase**
section6
tenedores-arriba-V1