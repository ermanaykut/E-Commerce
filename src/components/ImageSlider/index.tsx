import {
  View,
  Dimensions,
  FlatList,
  Text,
  ScrollView,
  Pressable,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import CustomImage from './components/CustomImage';
import styles from './style';
import FastImage from 'react-native-fast-image';

const {width, height} = Dimensions.get('screen');

export default function ImageSlider({
  images = [],
  pagingEnabled = true,
}: {
  images: any[];
  pagingEnabled?: boolean;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<ScrollView>(null);
  const flatListRef = useRef<FlatList>(null);

  const onHandledScrollToEnd = (value: any) => {
    const itemHeight = value.nativeEvent?.contentOffset.y;
    const index = Math.round(itemHeight / width);
    setActiveIndex(index);

    scrollRef.current?.scrollTo({
      animated: true,
      y: index * (width * 0.15),
    });
  };

  const renderImages = ({item}: {item: any}) => <CustomImage item={item} />;

  return (
    <View style={styles.list}>
      <FlatList
        ref={flatListRef}
        data={images ?? []}
        renderItem={renderImages}
        pagingEnabled={pagingEnabled}
        onMomentumScrollEnd={onHandledScrollToEnd}
        showsVerticalScrollIndicator={false}
      />
      <View style={styles.indicator}>
        <ScrollView
          ref={scrollRef}
          contentContainerStyle={{alignItems: 'center'}}>
          {images?.map((x: {url: string}, index: number) => {
            return (
              <Pressable
                onPress={() => {
                  setActiveIndex(index);
                  flatListRef.current?.scrollToIndex({index, animated: true});
                }}
                style={[
                  activeIndex == index
                    ? styles.activeIndicator
                    : styles.passiveIndicator,
                  styles.itemIndicator,
                ]}>
                <FastImage
                  style={
                    activeIndex == index
                      ? styles.activeImage
                      : styles.passiveImage
                  }
                  source={{
                    uri: x?.url,
                  }}
                />
              </Pressable>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
}