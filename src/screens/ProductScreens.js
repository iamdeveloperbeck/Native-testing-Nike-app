import { StyleSheet, View, FlatList, Image, Pressable } from 'react-native';
import products from '../data/products';

const ProductScreens = ({ navigation }) => {
    return (
        <FlatList data={products} renderItem={({ item }) => (
                <Pressable onPress={() => navigation.navigate('Product Detail')} style={styles.itemContainer}>
                    <Image source={{ uri: item.image }} style={styles.image} />
                </Pressable>
            )} 
            numColumns={2}
        />
    );
};

export default ProductScreens;

const styles = StyleSheet.create({
    itemContainer: {
        width: '50%',
        padding: 1
    },  
    image: {
        width: '100%',
        aspectRatio: 1/1
    }
});