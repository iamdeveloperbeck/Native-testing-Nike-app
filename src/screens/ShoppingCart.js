import { View, Text, FlatList, SafeAreaView, StyleSheet, Image, Pressable } from 'react-native';
import cart from '../data/cart';
import CartListItem from '../components/CartListItem';

const ShoppingCartTotals = () => (
    <View style={styles.totalsContainer}>
        <View style={styles.row}>
            <Text style={styles.text}>Subtotal</Text>
            <Text style={styles.text}>410,00 US$</Text>
        </View>
        <View style={styles.row}>
            <Text style={styles.text}>Delivery</Text>
            <Text style={styles.text}>10,00 US$</Text>
        </View>
        <View style={styles.row}>
            <Text style={styles.textBold}>Total</Text>
            <Text style={styles.textBold}>420,00 US$</Text>
        </View>
    </View>
);

const ShoppingCart = () => {
    return (
        <>
            <FlatList 
                data={cart} 
                renderItem={({ item }) => <CartListItem cartItem={item} />} 
                ListFooterComponent={ShoppingCartTotals}
            />
            <View style={styles.buttonBg}>
                <Image source={require('../../assets/blured-bg.png')} style={styles.bgBlur} />
                <Pressable style={styles.button}>
                    <Text style={styles.buttonText}>Checkout</Text>
                </Pressable>  
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    totalsContainer: {
        margin: 20,
        paddingTop: 10,
        borderColor: 'gainsboro',
        borderTopWidth: 1
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 2,
    },
    text: {
        fontSize: 16,
        color: 'gray',
    },
    textBold: {
        fontSize: 16,
        fontWeight: '500',
    },
    buttonBg: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        marginTop: 10
    },
    button: {
        width: '90%',
        backgroundColor: 'black',
        alignSelf: 'center',
        padding: 20,
        borderRadius: 100,
        alignItems: 'center',
        marginBottom: 30,
    },
    buttonText: {
        color: 'white',
        fontWeight: '500',
        fontSize: 16,
    },
    bgBlur: {
        position: 'absolute',
        bottom: 0,
        zIndex: -1,
        marginTop: 150
    }
});

export default ShoppingCart;