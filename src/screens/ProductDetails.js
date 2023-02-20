import { Image, StyleSheet, View, FlatList, useWindowDimensions, Text, ScrollView, Pressable } from "react-native";
import products from "../data/products";
import LinearGradient from "react-native-linear-gradient";

const ProductDetails = () => {
    const product = products[0];

    const { width } = useWindowDimensions();

    const addToCart = () => {
        console.warn('Added');
    }

    return (
        <View>
            <ScrollView>
                <FlatList 
                    data={product.images}
                    renderItem={({ item }) => (
                        <Image source={{ uri: item }} style={{ width, aspectRatio: 1 }} />
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                />

                <View style={{ padding: 20, paddingBottom: 100 }}>
                    <Text style={styles.title}>{product.name}</Text>
                    <Text style={styles.price}>${product.price}</Text>
                    <Text style={styles.description}>{product.description}</Text>
                </View>
            </ScrollView>
            <View style={styles.buttonBg}>
                <Image source={require('../../assets/blured-bg.png')} style={styles.bgBlur} />
                <Pressable onPress={addToCart} style={styles.button}>
                    <Text style={styles.buttonText}>Add to cart</Text>
                </Pressable>  
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 34,
        fontWeight: "500",
        marginVertical: 10,
    },
    price: {
        fontWeight: "500",
        fontSize: 16,
    },
    description: {
        marginVertical: 10,
        fontSize: 18,
        lineHeight: 30,
        fontWeight: "300",
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

export default ProductDetails;