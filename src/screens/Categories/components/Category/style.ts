import {StyleSheet, Dimensions} from 'react-native';
import { colors } from '../../../../constants/variables/colors';


const {width} = Dimensions.get('window');
const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  textButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    borderWidth: 2,
    borderRadius: 20,
    borderColor: colors.grey,
    width: width - 70,
    height: height / 20,
    backgroundColor: colors.lightgrey + 80,
    marginHorizontal: 35,
    marginVertical: 8,
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.darkgrey,
    fontVariant: ['small-caps'],
  },
});

export default styles;