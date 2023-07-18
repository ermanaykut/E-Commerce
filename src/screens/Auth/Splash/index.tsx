import {View, Text, SafeAreaView, ImageBackground} from 'react-native';
import React from 'react';
import styles from './style';
import LoadingShop from '../../../components/Loader/LoadingShop';
import GradientButton from '../../../components/GradientButton';
import {useNavigation} from '@react-navigation/native';

const Splash = () => {
  const navigation = useNavigation<any>();

  const navToCategory = () => {
    navigation.navigate('Categories');
  };

  return (
    <SafeAreaView style={styles.contanier}>
      <Text style={styles.title}>E-COMMERCE</Text>
      <View style={styles.lottieContanier}>
        <LoadingShop />
      </View>
      <View style={styles.buttonContainer}>
        <GradientButton
          title="Explore"
          onPress={navToCategory}
          style={styles.button}
        />
      </View>
    </SafeAreaView>
  );
};

export default React.memo(Splash);
