import {
  Alert,
  FlatList,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './style';
import ImageSlider from '../../../components/ImageSlider';
import productService from '../../../services/product-service';

import {useAppDispatch, useAppSelector} from '../../../store';
import {addToCart} from '../../../store/slices/cartSlice';

import {useNavigation} from '@react-navigation/native';
import {SimilarProduct} from './components';
import {IProduct} from '../../../constants/variables/types';
import {Button, Icon} from 'custom-components/src';
import {colors} from '../../../constants/variables/colors';
import {saveProducts} from '../../../store/slices/productSlice';
import LoadingWave from '../../../components/Loader/LoadingWave';

export default function ProductDetail({route}: any) {
  const {id = -1, products = []} = route?.params ?? {};
  const [item, setItem] = useState<IProduct>();
  const [loading, setLoading] = useState<boolean>(false);

  const navigation = useNavigation<any>();
  const dispatch = useAppDispatch();
  const similarProducts = useAppSelector(state => state.product);

  useEffect(() => {
    getData();
  }, [id]);

  const getData = () => {
    setLoading(true);
    productService
      .getProductDetail(id)
      .then((res: any) => {
        const arr = res?.data?.images?.map((x: string) => {
          return {url: x};
        });
        dispatch(saveProducts(res?.data?.products));
        setItem({...res?.data, images: arr});
      })
      .catch((err: any) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const addToBasket = () => {
    dispatch(addToCart(item));
  };

  const navigateToBack = () => {
    navigation.canGoBack() && navigation.goBack();
  };
  const navigateToCart = () => {
    navigation.navigate('Cart');
  };

  const navToSimilar = (item: IProduct) => {
    navigation.navigate('ProductDetail', {id: item?.id});
  };

  const renderItem = ({item}: {item: IProduct}) => (
    <SimilarProduct item={item} onPress={navToSimilar} />
  );

  return (
    <SafeAreaView style={styles.container}>
      {loading && <LoadingWave />}

      {!loading && (
        <ScrollView>
          <View style={styles.headerContainer}>
            <Pressable onPress={navigateToBack}>
              <Icon
                name="chevron-back : ion"
                size={30}
                color={colors.darkgrey}
              />
            </Pressable>

            <Pressable onPress={navigateToCart}>
              <Icon name="cart : ion" size={30} color={colors.darkgrey} />
            </Pressable>
          </View>

          <ImageSlider images={item?.images ?? []} />
          <View style={styles.brandContainer}>
            <Text style={styles.title}>
              {item?.brand} {item?.title}
            </Text>
          </View>
          <Text style={styles.description}>{item?.description}</Text>
          <View style={styles.priceButtonRow}>
            <View style={styles.priceContainer}>
              <Icon
                name="price-tag : entypo"
                size={25}
                color={colors.darkgreen}
              />
              <Text style={styles.priceText}>{item?.price}$</Text>
            </View>
            <Button
              text="Add To Cart"
              onPress={addToBasket}
              pv={10}
              ph={70}
              mr={15}
              backgroundColor={colors.lightgrey}
            />
          </View>
          <View>
            <FlatList
              data={similarProducts.filter((x: any) => x.id != item?.id)}
              renderItem={item => renderItem(item)}
              horizontal
            />
          </View>
        </ScrollView>
          )}
    </SafeAreaView>
  );
}
