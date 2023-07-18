import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './style';
import {useNavigation} from '@react-navigation/native';
import IconCase from '../../../../components/IconCase';
import { ICategory } from '../../../../constants/variables/types';


const Category = ({item}: {item: ICategory}) => {
  const navigation = useNavigation<any>();
  const onProductPress = () => {
    navigation.navigate('Products', {name: item.name});
  };

  return (
    <TouchableOpacity onPress={onProductPress} style={styles.textButton}>
      <Text style={styles.textStyle}>{item?.name}</Text>
      <IconCase item={item?.icon} />
    </TouchableOpacity>
  );
};

export default Category;