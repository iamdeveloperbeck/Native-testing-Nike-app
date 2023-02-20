import { View, Text, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ProductDetails from './screens/ProductDetails';
import ProductScreens from './screens/ProductScreens';
import ShoppingCart from './screens/ShoppingCart';

import { FontAwesome5 } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{ contentStyle: { backgroundColor: 'white' } }}>
            <Stack.Screen 
                name='Products'
                component={ProductScreens} 
                options={({ navigation }) => ({ headerRight: () => (
                        <Pressable onPress={() => navigation.navigate('Cart')} style={{ flexDirection: 'row' }}>
                            <FontAwesome5 name="shopping-cart" size={18} color="gray" />
                            <Text style={{ marginLeft: 5, fontWeight: '500' }}>1</Text>
                        </Pressable>
                    ) 
                })} 
            />
            <Stack.Screen name='Product Detail' component={ProductDetails} options={{ presentation: 'modal' }} />
            <Stack.Screen name='Cart' component={ShoppingCart} />
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;