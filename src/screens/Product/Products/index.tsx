import {SafeAreaView, FlatList, View, Pressable, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import productService from '../../../services/product-service';
import LoadingWave from '../../../components/Loader/LoadingWave';
import styles from './style';
import ProductItem from './components/ProductItem';

import {useNavigation} from '@react-navigation/native';

import {useAppDispatch} from '../../../store';

import {Icon} from 'custom-components/src';
import {colors} from '../../../constants/variables/colors';
import {IProduct, IProducts} from '../../../constants/variables/types';
import {saveProducts} from '../../../store/slices/productSlice';

export default function Products({route}: any) {
  const {name = ''} = route.params ?? '';
  const [loading, setLoading] = useState<boolean>(false);
  const [products, setProducts] = useState<IProducts>([]);

  const dispatch = useAppDispatch();
  const navigation = useNavigation<any>();

  const onGoBack = () => {
    navigation.goBack();
  };

  const navigateToCart = () => {
    navigation.navigate('Cart');
  };

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    setLoading(true);
    productService
      .getProducts(name)
      .then(res => {
        dispatch(saveProducts(res?.data?.products));
        setProducts(res?.data?.products);
      })
      .catch(err => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  };

  const renderProducts = ({item}: {item: IProduct}) => (
    <ProductItem item={item} products={products} />
  );

  return (
    <SafeAreaView style={styles.container}>
      {loading && <LoadingWave />}
      {!loading && (
        <View style={styles.headerContainer}>
          <Pressable style={styles.backIcon} onPress={onGoBack}>
            <Icon name="chevron-back : ion" size={30} color={colors.darkgrey} />
          </Pressable>
          <Text style={styles.title}>{name}</Text>
          <Pressable onPress={navigateToCart}>
              <Icon name="cart : ion" size={30} color={colors.darkgrey} />
            </Pressable>
        </View>
      )}
      <View>
        <FlatList
          data={products}
          renderItem={renderProducts}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          contentContainerStyle={styles.flatList}
        />
      </View>
    </SafeAreaView>
  );
}
