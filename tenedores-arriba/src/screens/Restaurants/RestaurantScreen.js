import { Button } from 'react-native-elements';
import { View, Text } from 'react-native';
import { screen } from '../../utils';
//the following import allows us to navigate to the AddRestaurantScreen
//ussing the useNavigation hook

export function RestaurantScreen(props) {

    const { navigation } = props;

    const goToAddRestaurant = () => {
        //the navigate method is used to navigate screens on the same stack
        navigation.navigate(screen.restaurant.tab, { screen: screen.restaurant.addRestaurant });
        //the mehod below is used to navigate to a screen on a different stack
        //for example the code below would navigate from restaurants to the account tab when <button> new restaurant</> is pressed
        // navigation.navigate (screens.account.tab{screen: screen.account.account});
    };

    return (
        <View>
            <Text>estamos en la screen restaurant</Text>
            <Button
                title="New Restaurant"
                onPress={goToAddRestaurant}
            >
            </Button>
        </View>
    )
}