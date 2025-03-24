# 28 Feb 2025
38
created Diary.Md
>Created `Restaurants` folder inside screens folder
this was made to group all stacks and navigation routes related to restaurants inside inside this folder.{**STACK** = group} EJ: Addrestaurantscreen, RestaurantScreen al are grouped in just 1 section (button) only one icon for restaurant will show on navigation but several screens inside it.
its necesary to do the same thing for each screen Account , Favorites, Ranking, etc.

Created `AddRestaurantScreen` file inside screens/Restaurant folder; 
Created `RestaurantStack.js` navigation; 
changed imports on `AppNavigation` from EX RestaurantScreen from "screens" TO RestaurantStack from"./RestaurantStack"
stack.Navigation contains all stack.Screen and should be the one taht contains the name of the tab there are 2 ways to do so,
1.  properties passed trough <Tab.Screen> only works on the screen where option is selected
```
<tab.Screen
    name={screen.restaurant.tab}
    component={RestaurantStack}
    options={{ title: "Restaurants",*headerShown:False* }}
/>
```
2. property passed trouugh <Tab.Navigator> works on all contained <Tab.Screen>
```
<tab.Navigator
    screenOptions={({ route }) => ({
  ===>  headerShown: false,//hide the header
        tabBarActiveTintColor: "#00a680",//color of the active tab passed as prop {color}
        tabBarInactiveTintColor: "#646494",//color of the inactive tab passed as prop {color}
        tabBarIcon: ({ color, size }) => tabBarOptions(route, color, size)
                
})}>
```
# 12 Mar 25
Addded stack navigation functionality
created favorites,account,ranking,search,account stack
1. screenName names added
2. ./navigation (search, ranking , )stack.js created
3. Moddified <Tab.Screen> component = RestaurantStack
<Tab.screen> options moddified header shown:False

# 13 mar 25
Screen navigation 
1. added button to Restaurant screen with consloe.log 