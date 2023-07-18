import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import FastImage from 'react-native-fast-image';
import styles from './style';
import { IProduct, IProducts } from '../../../../../constants/variables/types';


export default function ProductItem({
  item,
  products,
}: {
  item: IProduct;
  products: IProducts;
}) {
  const navigation = useNavigation<any>();
  const obj = {
    id: item.id,
    title: item?.title,
    products: products,
  };

  const onPressedItem = () => {
    navigation.navigate('ProductDetail', obj);
  };

  return (
    <Pressable style={styles.productContainer} onPress={onPressedItem}>
      <FastImage
        style={styles.imageStyle}
        source={{
          uri: item?.thumbnail,
        }}
      />
      <View style={styles.textContainer}>
        <Text numberOfLines={1} style={styles.textStyle}>
          {item.title}
        </Text>
        <Text style={styles.priceStyle}>{item.price}$</Text>
      </View>
    </Pressable>
  );
}