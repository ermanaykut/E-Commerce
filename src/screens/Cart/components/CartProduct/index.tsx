import {View, Text, Pressable} from 'react-native';
import React, {useState} from 'react';

import styles from './style';
import FastImage from 'react-native-fast-image';
import {useAppDispatch} from '../../../../store';
import {
  decreaseToAmount,
  increaseToAmount,
} from '../../../../store/slices/cartSlice';
import { IProduct } from '../../../../constants/variables/types';

const CartProduct = ({item}: {item: {item: IProduct; amount: number}}) => {
  const {item: _item, amount: _amount} = item;
  const [amount, setAmount] = useState<number>(_amount);

  const dispatch = useAppDispatch();

  const decreaseAmount = () => {
    setAmount(amount => {
      return amount - 1;
    });
    dispatch(decreaseToAmount(_item));
  };
  const increaseAmount = () => {
    setAmount(amount => {
      return amount + 1;
    });
    dispatch(increaseToAmount(_item));
  };

  return (
    <View style={styles.container}>
      <FastImage source={{uri: _item?.thumbnail}} style={styles.image} />
      <View style={styles.midContainer}>
        <Text style={styles.brand} numberOfLines={1}>{_item?.brand + ' - ' + _item?.title}</Text>
        <View style={styles.priceContainer}>
          <Text>{_amount * _item?.price}$</Text>
        </View>
      </View>
      <View style={styles.row}>
        <Pressable onPress={decreaseAmount} style={styles.box}>
          <Text>-</Text>
        </Pressable>
        <Text style={{width: 20, textAlign: 'center'}}>{amount}</Text>
        <Pressable onPress={increaseAmount} style={styles.box}>
          <Text>+</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default CartProduct;