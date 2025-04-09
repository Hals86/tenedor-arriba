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
> 2 ways for navigating through the pages
Using Props
1A.  same Stack
navigation.navigate=> method that allows moving between screens of the app
(screen.restaurant.addRestaurant)=>screenName.js;
1B. Diferent location Stack
for example the code below would navigate from restaurants to the account tab when <button> new restaurant</> is pressed
    navigation.navigate (screens.account.tab{screen: screen.account.account});
2 importing {useNavigation} from @react-navigation/native.
# 24 Mar 25

2. Firebase created
tenedores-arriba-v1 
file firebase.js created at Utils folder this file contains the code from firerbase project , const app = initializeApp(firebaseConfig) to const firebaseInitv =...
    added to App.js import{firebaseInit}
# 26 Mar 25
UseGuestScreen.js , LoggedScreen created
in `AccountScreen`:
- Created conditional rendering logic to switch between guest/logged states
- Implemented UseGuestScreen for non-authenticated users
  - Added login button with navigation to auth screen
  - Added register button with navigation to registration screen
- Implemented LoggedScreen for authenticated users
  - Added user info display
  - Added logout functionality
  
Firebase Implementation Details:
- Created authentication methods in utils/firebase.js
- Added user session management
- Implemented email/password authentication
- Set up user state persistence

Navigation Flow:
- AccountScreen -> UseGuestScreen (default for non-auth users)
- UseGuestScreen -> Login/Register screens
- After authentication -> LoggedScreen

#  02 APR 25
