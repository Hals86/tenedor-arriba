import { Button } from 'react-native-elements';
import { View, Text } from 'react-native';
import { screen } from '../../utils';
//the following import allows us to navigate to the AddRestaurantScreen
//ussing the useNavigation hook
import { useNavigation } from '@react-navigation/native';
export function RestaurantScreen(props) {

    const goToAddRestaurant = () => {
        navigation.navigate(screen.restaurants.addRestaurant);
    };

    return (
        <View>
            <Button
                title="New Restaurant"
                onPress={goToAddRestaurant}
            >
            </Button>
        </View>
    )
}