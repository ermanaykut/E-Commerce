import {Dimensions, StyleSheet} from 'react-native';
import { colors } from '../../../../../constants/variables/colors';



const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lemon,
  },
  productContainer: {
    marginHorizontal: 5,
  },
  imageStyle: {
    height: 200,
    width: (width - 40) / 2,
    borderRadius: 5,
    marginVertical: 10,

  },
  textContainer: {
    backgroundColor: 'rgba(0,0,0,.5)',
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    alignItems: 'center',
    width: '100%',
    height: 45,
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center',
  },
  textStyle: {
    fontSize: 20,
    fontWeight: '900',
    textAlign: 'center',
    color: colors.lemon,
    fontVariant: ['small-caps'],
  },
  priceStyle: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.white,
    shadowOpacity: .7,

  },
});

export default styles;