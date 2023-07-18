import {Dimensions, StyleSheet} from 'react-native';
import { colors } from '../../constants/variables/colors';


const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    width: width,
    height: width,
  },
  indicator: {
    position: 'absolute',
    right: 0,
    top: 30,
    width: width * 0.2,
    height: width * 0.81,
    alignItems :'center',
  },
  activeIndicator: {

    height: width * 0.18,
    width: width * 0.18,
  },
  passiveIndicator: {

    height: width * 0.15,
    width: width * 0.15,
  },
  activeImage: {

    height: width * 0.18,
    width: width * 0.18,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.darkgrey,
  },
  passiveImage: {

    height: width * 0.15,
    width: width * 0.15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.grey,
  },
  itemIndicator: {
    marginVertical: 2,
    marginRight: 30,
    borderRadius: 10,
  },
  list: {
    height: width,
    width,
  },
});

export default styles;