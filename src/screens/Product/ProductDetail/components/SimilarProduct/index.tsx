import {View, Text, Pressable, TouchableOpacity} from 'react-native';
import React from 'react';

import styles from './style';
import {IProduct} from '../../../../../constants/variables/types';
import FastImage from 'react-native-fast-image';

const SimilarProduct = ({
  item,
  onPress,
}: {
  item: IProduct;
  onPress: (item: IProduct) => void;
}) => {
  const _onPress = () => onPress(item);
  return (
    <Pressable onPress={_onPress}>
      <FastImage
        source={{uri: item?.thumbnail}}
        style={styles.imageContainer}
      />
    </Pressable>
  );
};

export default SimilarProduct;
